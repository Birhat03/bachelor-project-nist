document.addEventListener("DOMContentLoaded", function () {
    console.log("Script.js loading...");
    checkLoginStatus();
    // Additional initialization code

    const learningContent = document.getElementById("learningContent");

    if (!learningContent) {
        console.error("Error: #learningContent is missing from the HTML.");
        return;
    }

    // REMOVED conflicting updateAvatarDisplay function
    // Now call auth.js version instead
    
    function refreshUserAvatar() {
        if (typeof updateAvatarDisplay === 'function') {
            updateAvatarDisplay();
        }
    }

    function loadStage1() {
        // Check if user has an avatar already
        const selectedAvatar = getUserAvatar();
        if (selectedAvatar) {
            loadStage2();
            return;
        }
        
        // Redirect to profile page for avatar selection
        console.log("No avatar selected, redirecting to profile");
        alert("Please select an avatar in your profile first");
        window.location.href = "profile.html";
    }

    function loadStage2() {
        console.log("Loading Stage 2: Choose Core Function");

        learningContent.innerHTML = `
            <div class="content-box">
                <h2>Choose a Core Function</h2>
                <div class="core-grid">
                    <button class="core-btn" data-core="Identify">Identify</button>
                    <button class="core-btn" data-core="Protect">Protect</button>
                    <button class="core-btn" data-core="Control">Control</button>
                    <button class="core-btn" data-core="Communicate">Communicate</button>
                    <button class="core-btn" data-core="Govern">Govern</button>
                </div>
                <button id="nextCoreButton" class="button btn-next" disabled>Next</button>
            </div>
        `;

        let selectedCore = null;
        const nextButton = document.getElementById("nextCoreButton");

        document.querySelectorAll(".core-btn").forEach(button => {
            button.addEventListener("click", function () {
                document.querySelectorAll(".core-btn").forEach(btn => btn.classList.remove("selected"));
                this.classList.add("selected");

                selectedCore = this.getAttribute("data-core");
                localStorage.setItem("selectedCore", selectedCore);
                nextButton.disabled = false;
            });
        });

        nextButton.addEventListener("click", function () {
            if (selectedCore) {
                console.log("Core function selected:", selectedCore);
                loadStage3();
            }
        });

        refreshUserAvatar();
    }

    function loadStage3() {
        const selectedCore = localStorage.getItem("selectedCore");

        learningContent.innerHTML = `
            <div class="content-box">
                <h2>Modules in ${selectedCore}</h2>
                <div class="module-grid">
                    <button class="module-btn" data-module="Module 1">Module 1</button>
                    <button class="module-btn" data-module="Module 2">Module 2</button>
                    <button class="module-btn" data-module="Module 3">Module 3</button>
                </div>
            </div>
        `;

        document.querySelectorAll(".module-btn").forEach(button => {
            button.addEventListener("click", function () {
                localStorage.setItem("selectedModule", this.getAttribute("data-module"));
                loadStage4();
            });
        });

        refreshUserAvatar();
    }

    function loadStage4() {
        const selectedModule = localStorage.getItem("selectedModule");

        const moduleData = {
            "Module 1": ["Introduction", "Basics", "Advanced Topics", "Case Study", "Final Review"],
            "Module 2": ["Getting Started", "Key Concepts", "Hands-On", "Best Practices", "Assessment"],
            "Module 3": ["Privacy Principles", "Security Measures", "Compliance", "Ethical Concerns", "Final Exam"]
        };

        const sections = moduleData[selectedModule] || [];
        let completedSections = getUserProgress(selectedModule) || 0;

        function updateProgress() {
            const progressPercentage = (completedSections / sections.length) * 100;
            const progressElement = document.getElementById("progress");
            const progressTextElement = document.getElementById("progressText");

            if (progressElement && progressTextElement) {
                progressElement.style.width = `${progressPercentage}%`;
                progressTextElement.innerText = `${Math.round(progressPercentage)}% Complete`;
            }

            saveUserProgress(selectedModule, completedSections);
        }

        function loadSection(index) {
            if (index >= sections.length) {
                // Allow re-reading the module without resetting the completedSections
                completedSections = sections.length;
                updateProgress();
                index = 0; // Start from the beginning
            }

            learningContent.innerHTML = `
                <div class="module-container">
                    <div class="progress-bar-container">
                        <h3>Progress</h3>
                        <div class="progress-bar">
                            <div class="progress" id="progress" style="width: ${completedSections * (100 / sections.length)}%;"></div>
                        </div>
                        <p id="progressText">${completedSections * (100 / sections.length)}% Complete</p>
                    </div>
                    <div class="module-content">
                        <h2>${sections[index]}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eros vel mauris malesuada volutpat...</p>
                        <button id="nextButton" class="button btn-next">Next</button>
                    </div>
                    <div class="module-sections">
                        <h3>Module Sections</h3>
                        <ul id="moduleList">${sections.map((s, i) => `<li class="${i < completedSections ? 'completed' : ''}">${s}</li>`).join('')}</ul>
                    </div>
                </div>
            `;

            document.getElementById("nextButton").addEventListener("click", function () {
                document.querySelector(`#moduleList li:nth-child(${completedSections + 1})`).classList.add("completed");
                completedSections++;
                updateProgress();
                loadSection(completedSections);
            });

            refreshUserAvatar();
        }

        loadSection(completedSections);
    }

    function saveUserProgress(module, progress) {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            let users = JSON.parse(localStorage.getItem("users")) || {};
            if (!users[loggedInUser]) {
                users[loggedInUser] = { progress: {} };
            }
            users[loggedInUser].progress[module] = progress;
            localStorage.setItem("users", JSON.stringify(users));
        }
    }

    function getUserProgress(module) {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            let users = JSON.parse(localStorage.getItem("users")) || {};
            if (users[loggedInUser] && users[loggedInUser].progress) {
                return users[loggedInUser].progress[module] || 0;
            }
        }
        return 0;
    }

    window.restartLearning = function () {
        localStorage.removeItem("completedSections");
        loadStage1();
    };

    console.log("Starting Learning Module...");
    loadStage1();

    console.log("Script.js DOM ready");
    // Make sure progress UI is updated
    if (window.ProgressTracker) {
        window.ProgressTracker.updateUI();
    } else {
        console.error("ProgressTracker not available for updating UI!");
    }
});

// Example function to handle starting the learning process
function startLearning() {
    const avatar = getUserAvatar();
    if (!avatar) {
        alert("Please select an avatar first.");
        window.location.href = "avatar.html"; // Redirect to avatar selection page
        return;
    }

    const progress = getUserProgress();
    // Continue with the learning process using the user's progress
}

// Consolidated progress tracking functions

// Default user progress data structure
const defaultUserProgress = {
    completedModules: 0,
    totalModules: 5,
    passedQuizzes: 0,
    totalQuizzes: 10,
    points: 0,
    percentComplete: 0,
    modules: {},
    quizzes: {}
};

/**
 * Mark a module as completed and update progress
 * @param {string} moduleId - ID of the completed module
 * @param {number} points - Points earned for completing the module
 */
function completeModule(moduleId, points = 10) {
    console.log(`Script.js completeModule called for ${moduleId}`);
    if (window.ProgressTracker) {
        return window.ProgressTracker.completeModule(moduleId, points);
    } else {
        console.error("ProgressTracker not available! Progress won't be saved.");
        return false;
    }
}

/**
 * Mark a quiz as passed and update progress
 * @param {string} quizId - ID of the completed quiz
 * @param {number} score - Score achieved on the quiz
 * @param {number} points - Points earned for passing the quiz
 */
function completeQuiz(quizId, score, points = 5) {
    console.log(`Script.js completeQuiz called for ${quizId}`);
    if (window.ProgressTracker) {
        return window.ProgressTracker.completeQuiz(quizId, score, points);
    } else {
        console.error("ProgressTracker not available! Progress won't be saved.");
        return false;
    }
}
