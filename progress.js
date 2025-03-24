/**
 * Centralized Progress Tracking System
 * Manages user progress across learning modules, quizzes, and games
 */

// Force immediate initialization to ensure ProgressTracker is available early
console.log("Progress.js loading...");
initializeProgressTracker();

// Default progress structure
const DEFAULT_PROGRESS = {
    // Learning progress
    completedModules: 0,
    totalModules: 15, 
    moduleStatus: {},
    
    // Quiz progress
    quizzesPassed: 0,
    totalQuizzes: 10,
    quizStatus: {},
    
    // Game progress
    gamesCompleted: 0,
    totalGames: 5,
    gameStatus: {},
    highScores: {},
    
    // Overall stats
    points: 0,
    percentComplete: 0,
    lastUpdated: null
};

/**
 * Initialize the progress tracker and make it globally available
 */
function initializeProgressTracker() {
    console.log("Registering ProgressTracker globally...");
    
    // Make functions available globally
    window.ProgressTracker = {
        getUserProgress: getUserProgressData,
        saveUserProgress: saveUserProgressData,
        completeModule: completeModule,
        completeQuiz: completeQuiz,
        saveGameResult: saveGameResult,
        calculateOverallCompletion: calculateOverallCompletion,
        updateUI: updateProgressUI,
        
        // For debugging
        _getDefaultProgress: function() { return {...DEFAULT_PROGRESS}; },

        // For script.js compatibility
        getModuleProgress: function(moduleId) {
            const progress = getUserProgressData();
            return progress[moduleId] || 0;
        },
        saveModuleProgress: function(moduleId, value) {
            const progress = getUserProgressData();
            progress[moduleId] = value;
            return saveUserProgressData(progress);
        }
    };
    
    console.log("ProgressTracker initialized:", window.ProgressTracker ? "Success" : "Failed");
    
    // Wait for DOM to be ready before updating UI
    if (document.readyState === "loading") {
        document.addEventListener('DOMContentLoaded', updateProgressUI);
    } else {
        // DOM is already ready
        updateProgressUI();
    }
    
    // Add window.onload event to ensure progress is updated after all resources load
    window.addEventListener('load', function() {
        console.log("Window fully loaded, updating progress UI...");
        updateProgressUI();
    });
}

/**
 * Get user progress from localStorage
 * @returns {Object} User progress data
 */
function getUserProgressData() {
    try {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            const users = JSON.parse(localStorage.getItem("users") || "{}");
            if (users[loggedInUser] && users[loggedInUser].progress) {
                return {...DEFAULT_PROGRESS, ...users[loggedInUser].progress};
            }
        }
    } catch (error) {
        console.error("Error accessing progress data:", error);
    }
    
    return {...DEFAULT_PROGRESS};
}

/**
 * Save user progress to localStorage
 * @param {Object} progress - Progress data to save
 */
function saveUserProgressData(progress) {
    progress.lastUpdated = new Date().toISOString();
    progress.percentComplete = calculateOverallCompletion();
    
    try {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            const users = JSON.parse(localStorage.getItem("users") || "{}");
            if (!users[loggedInUser]) {
                users[loggedInUser] = {};
            }
            users[loggedInUser].progress = progress;
            localStorage.setItem("users", JSON.stringify(users));
            console.log("Progress saved successfully");
            
            // Migrate old game progress if it exists
            migrateOldGameData(progress);
            
            // IMPORTANT: Add compatibility for script.js module tracking
            // This preserves script.js's module progress without disrupting our structure
            if (loggedInUser) {
                // Get the existing users object again to avoid overwriting module progress
                let users = JSON.parse(localStorage.getItem("users") || "{}");
                
                // Check if there are module-specific progress values (from script.js)
                if (users[loggedInUser] && users[loggedInUser].progress) {
                    const existingProgress = users[loggedInUser].progress;
                    
                    // Copy any module-specific progress keys (like "Module 1", "Module 2")
                    Object.keys(existingProgress).forEach(key => {
                        if (typeof key === 'string' && key.includes('Module') && 
                            typeof existingProgress[key] === 'number') {
                            // Keep these module-specific progress values
                            progress[key] = existingProgress[key];
                        }
                    });
                    
                    // Save again with the combined progress
                    users[loggedInUser].progress = progress;
                    localStorage.setItem("users", JSON.stringify(users));
                }
            }
            
            // Update UI after saving
            updateProgressUI();
            return true;
        }
    } catch (error) {
        console.error("Error saving progress:", error);
    }
    
    return false;
}

/**
 * Migrate old game progress from separate localStorage
 */
function migrateOldGameData(progress) {
    try {
        const oldGameData = localStorage.getItem('userProgress');
        if (oldGameData) {
            const gameProgress = JSON.parse(oldGameData);
            
            // Copy any high scores that are better than current ones
            if (gameProgress.highScores) {
                if (!progress.highScores) progress.highScores = {};
                
                Object.keys(gameProgress.highScores).forEach(gameId => {
                    const oldScore = gameProgress.highScores[gameId];
                    const currentScore = progress.highScores[gameId] || 0;
                    
                    if (oldScore > currentScore) {
                        progress.highScores[gameId] = oldScore;
                    }
                });
            }
            
            // Copy completed games
            if (gameProgress.games) {
                if (!progress.gameStatus) progress.gameStatus = {};
                
                Object.keys(gameProgress.games).forEach(gameId => {
                    if (!progress.gameStatus[gameId]) {
                        progress.gameStatus[gameId] = {
                            played: true,
                            lastPlayed: new Date().toISOString()
                        };
                        progress.gamesCompleted++;
                    }
                });
            }
            
            // Update the progress with migrated data
            saveUserProgressData(progress);
            
            // Clear old game data to avoid future conflicts
            localStorage.removeItem('userProgress');
            console.log("Migrated old game data");
        }
    } catch (error) {
        console.error("Error migrating game data:", error);
    }
}

/**
 * Mark a module as completed
 * @param {string} moduleId - ID of the module
 * @param {number} points - Points to award
 * @returns {boolean} Whether the operation was successful
 */
function completeModule(moduleId, points = 100) {
    console.log(`Completing module: ${moduleId} for ${points} points`);
    const progress = getUserProgressData();
    
    // Initialize objects if needed
    if (!progress.moduleStatus) progress.moduleStatus = {};
    
    // Check if already completed to avoid duplicating points
    if (progress.moduleStatus[moduleId] && progress.moduleStatus[moduleId].completed) {
        console.log(`Module ${moduleId} already completed`);
        return false;
    }
    
    // Initialize if needed
    if (!progress.moduleStatus[moduleId]) {
        progress.moduleStatus[moduleId] = {};
    }
    
    // Mark as completed
    progress.moduleStatus[moduleId].completed = true;
    progress.moduleStatus[moduleId].completedAt = new Date().toISOString();
    
    // Update counts and points
    progress.completedModules = Object.values(progress.moduleStatus)
        .filter(m => m.completed).length;
    progress.points = (progress.points || 0) + points;
    
    console.log(`Module completed: ${moduleId}, new total: ${progress.completedModules}`);
    
    // Save changes
    return saveUserProgressData(progress);
}

/**
 * Mark a quiz as completed
 * @param {string} quizId - ID of the quiz
 * @param {number} score - Score achieved
 * @param {number} points - Points to award
 * @returns {boolean} Whether the operation was successful
 */
function completeQuiz(quizId, score, points = 50) {
    console.log(`Completing quiz: ${quizId} with score ${score}`);
    const progress = getUserProgressData();
    
    // Initialize if needed
    if (!progress.quizStatus) progress.quizStatus = {};
    
    // Check if it's a new completion or improved score
    const isNew = !progress.quizStatus[quizId];
    const previousScore = progress.quizStatus[quizId]?.score || 0;
    const isImproved = score > previousScore;
    
    // Update quiz status
    if (!progress.quizStatus[quizId]) {
        progress.quizStatus[quizId] = {};
    }
    
    progress.quizStatus[quizId].completed = true;
    progress.quizStatus[quizId].score = score;
    progress.quizStatus[quizId].completedAt = new Date().toISOString();
    
    // Update counts and points
    progress.quizzesPassed = Object.values(progress.quizStatus)
        .filter(q => q.completed).length;
    
    if (isNew) {
        progress.points += points;
    } else if (isImproved) {
        // Give bonus points for improvement
        progress.points += Math.floor(points * 0.2);
    }
    
    // Save changes
    return saveUserProgressData(progress);
}

/**
 * Save game results and update progress
 * @param {string} gameId - ID of the game 
 * @param {number} score - Score achieved
 * @returns {boolean} Whether the operation was successful
 */
function saveGameResult(gameId, score) {
    console.log(`Saving game result: ${gameId} with score ${score}`);
    const progress = getUserProgressData();
    
    // Initialize objects if needed
    if (!progress.gameStatus) progress.gameStatus = {};
    if (!progress.highScores) progress.highScores = {};
    
    // Check if it's a new completion or high score
    const isNew = !progress.gameStatus[gameId];
    const previousHighScore = progress.highScores[gameId] || 0;
    const isHighScore = score > previousHighScore;
    
    // Update game status
    if (!progress.gameStatus[gameId]) {
        progress.gameStatus[gameId] = {};
        progress.gamesCompleted = (progress.gamesCompleted || 0) + 1;
    }
    
    progress.gameStatus[gameId].played = true;
    progress.gameStatus[gameId].lastPlayed = new Date().toISOString();
    
    // Update high score if applicable
    if (isHighScore) {
        progress.highScores[gameId] = score;
        
        // Award points for high scores
        if (isNew) {
            progress.points += 75; // First time completion
        } else {
            progress.points += 25; // Improved high score
        }
    }
    
    // Save changes
    return saveUserProgressData(progress);
}

/**
 * Calculate overall completion percentage
 * @returns {number} Percentage of completion (0-100)
 */
function calculateOverallCompletion() {
    const progress = getUserProgressData();
    
    const modulePercentage = progress.totalModules > 0 ? 
        (progress.completedModules / progress.totalModules) * 100 : 0;
        
    const quizPercentage = progress.totalQuizzes > 0 ? 
        (progress.quizzesPassed / progress.totalQuizzes) * 100 : 0;
        
    const gamePercentage = progress.totalGames > 0 ? 
        (progress.gamesCompleted / progress.totalGames) * 100 : 0;
    
    // Weight the different components
    const overall = (modulePercentage * 0.5) + (quizPercentage * 0.3) + (gamePercentage * 0.2);
    return Math.round(overall);
}

/**
 * Update progress bar UI elements across all pages
 */
function updateProgressUI() {
    console.log("Updating progress UI elements...");
    const progress = getUserProgressData();
    const overallPercentage = calculateOverallCompletion();
    
    try {
        // Find and update progress bars if they exist
        const progressBars = document.querySelectorAll('.progress-bar-fill');
        if (progressBars && progressBars.length > 0) {
            progressBars.forEach(bar => {
                bar.style.width = `${overallPercentage}%`;
            });
        } else {
            // If progress-bar-fill doesn't exist, look for other progress elements
            const progressElements = document.querySelectorAll('.progress');
            if (progressElements && progressElements.length > 0) {
                progressElements.forEach(el => {
                    el.style.width = `${overallPercentage}%`;
                });
            }
        }
        
        // Update percentages if they exist
        const progressPercentages = document.querySelectorAll('.progress-percentage');
        if (progressPercentages && progressPercentages.length > 0) {
            progressPercentages.forEach(element => {
                element.textContent = `${overallPercentage}%`;
            });
        }
        
        // Update stats counters if they exist
        const modulesCompleted = document.getElementById('modulesCompleted');
        if (modulesCompleted) {
            modulesCompleted.textContent = `${progress.completedModules}/${progress.totalModules}`;
        }
        
        const quizzesPassed = document.getElementById('quizzesPassed');
        if (quizzesPassed) {
            quizzesPassed.textContent = `${progress.quizzesPassed}/${progress.totalQuizzes}`;
        }
        
        const pointsEarned = document.getElementById('pointsEarned');
        if (pointsEarned) {
            pointsEarned.textContent = progress.points;
        }
        
        // Only update profile page elements if we're on the profile page
        if (document.getElementById('modulesProgress')) {
            updateProfilePageProgress(progress);
        }
        
        console.log("Progress UI updated successfully");
    } catch (error) {
        console.error("Error updating progress UI:", error);
    }
}

/**
 * Update profile page specific progress elements
 * @param {Object} progress - User progress data
 */
function updateProfilePageProgress(progress) {
    try {
        // Elements specific to profile.html
        const modulesProgress = document.getElementById('modulesProgress');
        const modulesPercentage = document.getElementById('modulesPercentage');
        const gamesProgress = document.getElementById('gamesProgress');
        const gamesPercentage = document.getElementById('gamesPercentage');
        const overallProgress = document.getElementById('overallProgress');
        const overallPercentage = document.getElementById('overallPercentage');
        
        if (!modulesProgress) return; // Not on profile page
        
        const modulesPercent = Math.round((progress.completedModules / progress.totalModules) * 100);
        const gamesPercent = Math.round((progress.gamesCompleted / progress.totalGames) * 100);
        const overallPercent = calculateOverallCompletion();
        
        modulesProgress.style.width = `${modulesPercent}%`;
        modulesPercentage.textContent = `${modulesPercent}%`;
        
        gamesProgress.style.width = `${gamesPercent}%`;
        gamesPercentage.textContent = `${gamesPercent}%`;
        
        overallProgress.style.width = `${overallPercent}%`;
        overallPercentage.textContent = `${overallPercent}%`;
    } catch (error) {
        console.error("Error updating profile page progress:", error);
    }
}