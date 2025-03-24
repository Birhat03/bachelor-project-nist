/**
 * Games functionality for Gamified Privacy
 * Implements interactive games related to privacy concepts
 */

// Add this at the top
console.log("Games.js loading...");

// Game data repository with all game content
const gameData = {
    // Quiz game data
    "privacy-quiz": {
        id: "privacy-quiz",
        title: "Privacy Quiz Challenge",
        category: "identify",
        maxScore: 200,
        description: "Test your knowledge with multiple-choice questions about privacy concepts.",
        questions: [
            {
                question: "What does the 'Identify' function in the NIST Privacy Framework help organizations with?",
                options: [
                    "Creating privacy notices for users",
                    "Understanding how to manage privacy risks from data processing",
                    "Implementing technical safeguards for data",
                    "Training employees on privacy practices"
                ],
                correctAnswer: 1,
                explanation: "The 'Identify' function helps organizations develop understanding to manage privacy risks for individuals arising from data processing."
            },
            {
                question: "Which of the following is a key component of a privacy risk assessment?",
                options: [
                    "Marketing analysis",
                    "Employee performance reviews",
                    "Evaluating likelihood and impact of privacy events",
                    "System uptime monitoring"
                ],
                correctAnswer: 2,
                explanation: "Privacy risk assessments evaluate the likelihood and impact of potential privacy events to prioritize privacy risk management activities."
            },
            {
                question: "What is data minimization?",
                options: [
                    "Collecting only the data necessary for a specific purpose",
                    "Storing data in the smallest file size possible",
                    "Reducing the number of employees who can access data",
                    "Deleting all personal data after processing"
                ],
                correctAnswer: 0,
                explanation: "Data minimization is the practice of limiting data collection to only what is required to fulfill a specific purpose."
            },
            {
                question: "Which privacy principle gives individuals the right to access their personal data?",
                options: [
                    "Transparency",
                    "Security",
                    "Individual Participation",
                    "Purpose Specification"
                ],
                correctAnswer: 2,
                explanation: "Individual Participation is the principle that allows individuals to access, correct, and control their personal information."
            },
            {
                question: "What is a Data Protection Impact Assessment (DPIA)?",
                options: [
                    "A technical test of security controls",
                    "A process to identify and minimize privacy risks before processing data",
                    "A report on data breaches that have occurred",
                    "A measure of how much data is being protected"
                ],
                correctAnswer: 1,
                explanation: "A DPIA is a systematic process to identify and minimize privacy risks before starting new data processing activities."
            }
        ]
    },
    
    // Matching game data
    "privacy-match": {
        id: "privacy-match",
        title: "Privacy Term Matcher",
        category: "govern",
        maxScore: 150,
        description: "Match privacy terms with their correct definitions in this memory-style game.",
        pairs: [
            { term: "Consent", definition: "Permission from an individual to process their personal data for a specific purpose" },
            { term: "Data Controller", definition: "Entity that determines the purposes and means of processing personal data" },
            { term: "Data Subject", definition: "The individual whose personal data is being processed" },
            { term: "PII", definition: "Personally Identifiable Information that can be used to identify a specific individual" },
            { term: "Anonymization", definition: "Process of removing identifiers to prevent re-identification of an individual" },
            { term: "Data Processing", definition: "Any operation performed on personal data, such as collection, storage, or analysis" },
            { term: "Privacy Notice", definition: "Document that informs individuals about how their data is used" },
            { term: "Data Breach", definition: "Security incident resulting in unauthorized access to protected data" }
        ]
    },
    
    // Word scramble game data
    "privacy-words": {
        id: "privacy-words",
        title: "Privacy Word Scramble",
        category: "communicate",
        maxScore: 100,
        description: "Unscramble privacy-related terms against the clock in this fast-paced word game.",
        words: [
            { 
                word: "CONSENT", 
                hint: "Permission to use data",
                difficulty: "easy"
            },
            { 
                word: "PRIVACY", 
                hint: "Right to be left alone",
                difficulty: "easy" 
            },
            { 
                word: "FRAMEWORK", 
                hint: "Structured approach for implementation",
                difficulty: "medium" 
            },
            { 
                word: "GOVERNANCE", 
                hint: "Organizational oversight of privacy",
                difficulty: "medium" 
            },
            { 
                word: "COMPLIANCE", 
                hint: "Following rules and regulations",
                difficulty: "medium" 
            },
            { 
                word: "TRANSPARENCY", 
                hint: "Being open about data practices",
                difficulty: "hard" 
            },
            { 
                word: "CONFIDENTIAL", 
                hint: "Meant to be kept secret",
                difficulty: "hard" 
            },
            { 
                word: "PSEUDONYMIZATION", 
                hint: "Replacing identifiers with aliases",
                difficulty: "expert" 
            }
        ]
    },
    
    // Scenario game data
    "privacy-scenario": {
        id: "privacy-scenario",
        title: "Privacy Decision Maker",
        category: "control",
        maxScore: 300,
        description: "Make decisions in realistic privacy scenarios and see the consequences of your choices.",
        scenarios: [
            {
                id: 1,
                situation: "Your company is developing a new mobile app that collects location data. What approach should you take?",
                options: [
                    {
                        text: "Collect precise location data continuously to provide the best user experience",
                        points: 0,
                        feedback: "Collecting continuous precise location data is excessive for most purposes and creates significant privacy risks."
                    },
                    {
                        text: "Collect location data only when the app is in use and the feature requires it",
                        points: 75,
                        feedback: "This demonstrates data minimization by limiting collection to when it's actually needed."
                    },
                    {
                        text: "Use approximate location when possible and precise location only when necessary",
                        points: 100,
                        feedback: "Perfect! This applies both data minimization and necessity principles, reducing privacy risk while maintaining functionality."
                    },
                    {
                        text: "Don't collect any location data and find alternative ways to provide functionality",
                        points: 50,
                        feedback: "While this eliminates privacy risk from location data, it may unnecessarily limit functionality when safe collection methods exist."
                    }
                ]
            },
            {
                id: 2,
                situation: "You discover a potential data breach affecting user personal information. What is your first action?",
                options: [
                    {
                        text: "Immediately notify all affected users",
                        points: 50,
                        feedback: "While notification is important, first understanding the scope and impact of the breach is necessary to provide accurate information."
                    },
                    {
                        text: "Investigate to determine the scope and impact of the breach",
                        points: 100,
                        feedback: "Excellent! Properly investigating the breach first allows you to understand what happened and take appropriate containment actions."
                    },
                    {
                        text: "Fix the security vulnerability without telling anyone",
                        points: 0,
                        feedback: "Attempting to cover up a breach violates transparency principles and likely legal requirements for notification."
                    },
                    {
                        text: "Consult with legal counsel about liability concerns",
                        points: 75,
                        feedback: "Legal consultation is important, but should happen alongside technical investigation and containment efforts."
                    }
                ]
            },
            {
                id: 3,
                situation: "Your analytics team wants to use customer data for a new marketing initiative. How should you proceed?",
                options: [
                    {
                        text: "Use the data since customers already provided it for other purposes",
                        points: 0,
                        feedback: "Using data for new purposes without consent violates purpose limitation principles and may be illegal under many privacy laws."
                    },
                    {
                        text: "Anonymize the data completely before using it for analytics",
                        points: 75,
                        feedback: "Anonymization is a good approach if done properly, though you should verify the new use is compatible with your privacy policy."
                    },
                    {
                        text: "Obtain explicit consent from customers for the new use case",
                        points: 100,
                        feedback: "Correct! Getting specific consent for new data uses respects individual autonomy and complies with most privacy regulations."
                    },
                    {
                        text: "Use only aggregated statistical data that can't identify individuals",
                        points: 75,
                        feedback: "Using properly aggregated data reduces privacy risks, but you should still check if this new use is compatible with your existing notices."
                    }
                ]
            }
        ]
    },
    
    // Security challenge game data
    "security-challenge": {
        id: "security-challenge",
        title: "Security Challenge",
        category: "protect",
        maxScore: 250,
        description: "Identify security vulnerabilities and fix them before time runs out in this challenge.",
        challenges: [
            {
                title: "Password Security",
                description: "Identify the strongest password policy for your organization:",
                options: [
                    { text: "Require changing passwords every 30 days", correct: false },
                    { text: "Minimum 8 characters with complexity requirements", correct: false },
                    { text: "Long passphrases with multi-factor authentication", correct: true },
                    { text: "Passwords stored in an encrypted database", correct: false }
                ],
                explanation: "Long passphrases combined with multi-factor authentication provide the best security without encouraging poor user behaviors like writing passwords down."
            },
            {
                title: "Data Storage",
                description: "Which of these approaches is best for storing sensitive customer data?",
                options: [
                    { text: "Encrypted database with access controls", correct: true },
                    { text: "Password-protected spreadsheets", correct: false },
                    { text: "Cloud storage with standard security", correct: false },
                    { text: "Local servers behind a firewall", correct: false }
                ],
                explanation: "Encryption plus access controls provides defense in depth - protecting the data itself and controlling who can access it."
            },
            {
                title: "Secure Development",
                description: "Which practice is most important when developing privacy-focused software?",
                options: [
                    { text: "Penetration testing before release", correct: false },
                    { text: "Privacy by Design from the beginning", correct: true },
                    { text: "Regular security updates", correct: false },
                    { text: "Open source code for transparency", correct: false }
                ],
                explanation: "Privacy by Design incorporates privacy from the initial planning stages, making it more effective than approaches that add privacy later."
            },
            {
                title: "Data Transfer",
                description: "What's the most secure way to transfer sensitive data between systems?",
                options: [
                    { text: "Encrypted email attachments", correct: false },
                    { text: "Secure FTP with password protection", correct: false },
                    { text: "End-to-end encrypted secure channel", correct: true },
                    { text: "Physical media with courier delivery", correct: false }
                ],
                explanation: "End-to-end encryption ensures data is protected throughout the entire transfer process, preventing interception at any point."
            }
        ]
    }
};

// Cached DOM elements
let dom = {};

// Current game state
let gameState = {
    currentGame: null,
    score: 0,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    matchedPairs: 0,
    flippedCards: [],
    timeLeft: 0,
    timerInterval: null,
    attemptedWords: 0,
    currentScenarioIndex: 0,
    challengeIndex: 0
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    cacheDOMElements();
    
    // Setup event listeners
    setupCategoryTabs();
    setupGameButtons();
    setupBackButton();
    setupRestartButton();
    
    // Initialize progress display
    updateGameStats();
});

// Cache frequently accessed DOM elements
function cacheDOMElements() {
    dom = {
        gameSelection: document.getElementById('game-selection'),
        gamePlayArea: document.getElementById('game-play-area'),
        gameContainer: document.getElementById('game-container'),
        gameTitle: document.getElementById('current-game-title'),
        scoreDisplay: document.getElementById('current-score'),
        backButton: document.getElementById('back-to-games'),
        restartButton: document.getElementById('restart-game'),
        gamesCompleted: document.getElementById('gamesCompleted'),
        highScores: document.getElementById('highScores'),
        pointsEarned: document.getElementById('pointsEarned'),
        progressBar: document.querySelector('.progress-bar-fill'),
        progressPercentage: document.querySelector('.progress-percentage'),
        categoryTabs: document.querySelectorAll('.category-tab'),
        gameCards: document.querySelectorAll('.game-card'),
        leaderboard: document.getElementById('leaderboard')
    };
}

// Set up category tab filtering
function setupCategoryTabs() {
    dom.categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            dom.categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Get selected category
            const category = tab.dataset.category;
            
            // Filter game cards
            filterGamesByCategory(category);
        });
    });
}

// Filter games by selected category
function filterGamesByCategory(category) {
    dom.gameCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Set up game start buttons
function setupGameButtons() {
    const startButtons = document.querySelectorAll('.start-game-btn');
    
    startButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const gameCard = e.target.closest('.game-card');
            if (gameCard) {
                const gameId = gameCard.dataset.gameId;
                startGame(gameId);
            }
        });
    });
}

// Set up back button
function setupBackButton() {
    if (dom.backButton) {
        dom.backButton.addEventListener('click', () => {
            // Clear any active timers
            if (gameState.timerInterval) {
                clearInterval(gameState.timerInterval);
                gameState.timerInterval = null;
            }
            
            // Show game selection, hide game play area
            dom.gamePlayArea.style.display = 'none';
            dom.gameSelection.style.display = 'block';
            
            // Reset game state
            resetGameState();
        });
    }
}

// Set up restart button
function setupRestartButton() {
    if (dom.restartButton) {
        dom.restartButton.addEventListener('click', () => {
            // Restart current game
            if (gameState.currentGame) {
                startGame(gameState.currentGame);
            }
        });
    }
}

// Start a game
function startGame(gameId) {
    // Get game data
    const game = gameData[gameId];
    if (!game) {
        console.error(`Game not found: ${gameId}`);
        return;
    }
    
    // Update current game
    gameState.currentGame = gameId;
    
    // Reset game state
    resetGameState();
    
    // Update UI
    dom.gameTitle.textContent = game.title;
    dom.scoreDisplay.textContent = `Score: 0`;
    
    // Show game play area, hide selection
    dom.gameSelection.style.display = 'none';
    dom.gamePlayArea.style.display = 'block';
    
    // Initialize the specific game type
    switch (gameId) {
        case 'privacy-quiz':
            initializeQuizGame(game);
            break;
        case 'privacy-match':
            initializeMatchingGame(game);
            break;
        case 'privacy-words':
            initializeWordGame(game);
            break;
        case 'privacy-scenario':
            initializeScenarioGame(game);
            break;
        case 'security-challenge':
            initializeSecurityGame(game);
            break;
        default:
            console.error(`Unknown game type: ${gameId}`);
            return;
    }
}

// Reset game state
function resetGameState() {
    gameState = {
        currentGame: gameState.currentGame,
        score: 0,
        currentQuestionIndex: 0,
        selectedAnswer: null,
        matchedPairs: 0,
        flippedCards: [],
        timeLeft: 0,
        timerInterval: null,
        attemptedWords: 0,
        currentScenarioIndex: 0,
        challengeIndex: 0
    };
}

// Update score display
function updateScore(points) {
    gameState.score += points;
    
    // Update the score display
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = gameState.score;
    }
}

// =========================
// Quiz Game Implementation
// =========================

function initializeQuizGame(game) {
    // Start with the first question
    gameState.currentQuestionIndex = 0;
    showQuizQuestion(game);
}

function showQuizQuestion(game) {
    const question = game.questions[gameState.currentQuestionIndex];
    const totalQuestions = game.questions.length;
    
    // Create quiz HTML
    let quizHTML = `
        <div class="quiz-container">
            <div class="quiz-progress">Question ${gameState.currentQuestionIndex + 1} of ${totalQuestions}</div>
            <div class="quiz-question">${question.question}</div>
            <div class="quiz-options">
    `;
    
    // Add options
    question.options.forEach((option, index) => {
        quizHTML += `
            <div class="quiz-option" data-index="${index}">${option}</div>
        `;
    });
    
    // Add feedback and navigation
    quizHTML += `
            </div>
            <div class="quiz-feedback" style="display: none;"></div>
            <div class="quiz-navigation">
                <button class="nav-button" id="quiz-prev" ${gameState.currentQuestionIndex === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Previous
                </button>
                <button class="action-button" id="quiz-submit" disabled>
                    Check Answer <i class="fas fa-check"></i>
                </button>
                <button class="nav-button" id="quiz-next" style="display: none;">
                    Next <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = quizHTML;
    
    // Setup option click handlers
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            // Update selection
            options.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            gameState.selectedAnswer = parseInt(option.dataset.index);
            
            // Enable submit button
            document.getElementById('quiz-submit').disabled = false;
        });
    });
    
    // Setup button handlers
    document.getElementById('quiz-prev').addEventListener('click', () => {
        if (gameState.currentQuestionIndex > 0) {
            gameState.currentQuestionIndex--;
            showQuizQuestion(game);
        }
    });
    
    document.getElementById('quiz-submit').addEventListener('click', () => {
        checkQuizAnswer(game);
    });
    
    document.getElementById('quiz-next').addEventListener('click', () => {
        gameState.currentQuestionIndex++;
        
        if (gameState.currentQuestionIndex < game.questions.length) {
            showQuizQuestion(game);
        } else {
            finishQuizGame(game);
        }
    });
}

function checkQuizAnswer(game) {
    const question = game.questions[gameState.currentQuestionIndex];
    const feedback = document.querySelector('.quiz-feedback');
    const options = document.querySelectorAll('.quiz-option');
    const submitButton = document.getElementById('quiz-submit');
    const nextButton = document.getElementById('quiz-next');
    
    // Get selected and correct options
    const selectedOption = options[gameState.selectedAnswer];
    const correctOption = options[question.correctAnswer];
    
    // Disable option selection
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Show correct/incorrect status
    if (gameState.selectedAnswer === question.correctAnswer) {
        // Correct answer
        selectedOption.classList.add('correct');
        feedback.textContent = `Correct! ${question.explanation}`;
        feedback.classList.add('correct');
        
        // Add points
        const pointsPerQuestion = Math.floor(gameData[gameState.currentGame].maxScore / game.questions.length);
        updateScore(pointsPerQuestion);
    } else {
        // Wrong answer
        selectedOption.classList.add('wrong');
        correctOption.classList.add('correct');
        feedback.textContent = `Incorrect. ${question.explanation}`;
        feedback.classList.add('wrong');
    }
    
    // Show feedback and next button
    feedback.style.display = 'block';
    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-flex';
}

function finishQuizGame(game) {
    // Calculate final score percentage
    const scorePercentage = Math.round((gameState.score / game.maxScore) * 100);
    
    // Create completion HTML
    let completionHTML = `
        <div class="game-completion">
            <h3><i class="fas fa-trophy"></i> Quiz Completed!</h3>
            <div class="completion-score">
                <p>Your Score: ${gameState.score} / ${game.maxScore}</p>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${scorePercentage}%"></div>
                </div>
                <p class="score-percentage">${scorePercentage}%</p>
            </div>
            <div class="completion-message">
                ${getCompletionMessage(scorePercentage)}
            </div>
            <button class="action-button" id="finish-game">
                <i class="fas fa-check-circle"></i> Complete Game
            </button>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = completionHTML;
    
    // Save game results when completed
    document.getElementById('finish-game').addEventListener('click', () => {
        saveGameResults(game.id, gameState.score);
        
        // Return to game selection
        dom.gamePlayArea.style.display = 'none';
        dom.gameSelection.style.display = 'block';
    });
}

// =========================
// Matching Game Implementation
// =========================

function initializeMatchingGame(game) {
    // Prepare pairs (we need two cards for each pair)
    let cards = [];
    
    // Create cards for terms and definitions
    game.pairs.forEach(pair => {
        cards.push({ id: `term-${pair.term}`, content: pair.term, type: 'term', match: `def-${pair.term}` });
        cards.push({ id: `def-${pair.term}`, content: pair.definition, type: 'definition', match: `term-${pair.term}` });
    });
    
    // Shuffle cards
    cards = shuffleArray(cards);
    
    // Create matching game HTML
    let matchingHTML = `
        <div class="matching-container">
    `;
    
    // Add cards
    cards.forEach(card => {
        matchingHTML += `
            <div class="matching-card" data-id="${card.id}" data-match="${card.match}">
                <div class="matching-card-front">
                    <i class="fas fa-question"></i>
                </div>
                <div class="matching-card-back ${card.type}">
                    ${card.content}
                </div>
            </div>
        `;
    });
    
    matchingHTML += `
        </div>
        <div class="matching-status">
            <p>Pairs matched: <span id="pairs-matched">0</span> / ${game.pairs.length}</p>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = matchingHTML;
    
    // Setup card click handlers
    const matchingCards = document.querySelectorAll('.matching-card');
    matchingCards.forEach(card => {
        card.addEventListener('click', () => {
            // Ignore clicks on already matched or flipped cards
            if (card.classList.contains('matched') || 
                card.classList.contains('flipped') || 
                gameState.flippedCards.length >= 2) {
                return;
            }
            
            // Flip card
            card.classList.add('flipped');
            gameState.flippedCards.push(card);
            
            // Check for match if we have two flipped cards
            if (gameState.flippedCards.length === 2) {
                checkForMatch(game);
            }
        });
    });
}

function checkForMatch(game) {
    const [card1, card2] = gameState.flippedCards;
    
    // Check if cards match
    if (card1.dataset.id === card2.dataset.match) {
        // Match found
        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            
            // Update matched pairs count
            gameState.matchedPairs++;
            document.getElementById('pairs-matched').textContent = gameState.matchedPairs;
            
            // Update score
            const pointsPerPair = Math.floor(game.maxScore / game.pairs.length);
            updateScore(pointsPerPair);
            
            // Reset flipped cards array
            gameState.flippedCards = [];
            
            // Check if game is complete
            if (gameState.matchedPairs === game.pairs.length) {
                setTimeout(() => {
                    finishMatchingGame(game);
                }, 1000);
            }
        }, 800);
    } else {
        // No match
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            
            // Reset flipped cards array
            gameState.flippedCards = [];
        }, 1200);
    }
}

function finishMatchingGame(game) {
    // Calculate final score percentage
    const scorePercentage = Math.round((gameState.score / game.maxScore) * 100);
    
    // Create completion HTML
    let completionHTML = `
        <div class="game-completion">
            <h3><i class="fas fa-trophy"></i> Matching Game Completed!</h3>
            <div class="completion-score">
                <p>Your Score: ${gameState.score} / ${game.maxScore}</p>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${scorePercentage}%"></div>
                </div>
                <p class="score-percentage">${scorePercentage}%</p>
            </div>
            <div class="completion-message">
                ${getCompletionMessage(scorePercentage)}
            </div>
            <button class="action-button" id="finish-game">
                <i class="fas fa-check-circle"></i> Complete Game
            </button>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = completionHTML;
    
    // Save game results when completed
    document.getElementById('finish-game').addEventListener('click', () => {
        saveGameResults(game.id, gameState.score);
        
        // Return to game selection
        dom.gamePlayArea.style.display = 'none';
        dom.gameSelection.style.display = 'block';
    });
}

// =========================
// Word Scramble Game Implementation
// =========================

function initializeWordGame(game) {
    // Shuffle and get words
    const shuffledWords = shuffleArray([...game.words]);
    gameState.words = shuffledWords;
    gameState.attemptedWords = 0;
    
    // Start with first word
    showNextWord(game);
}

function showNextWord(game) {
    // Check if we've gone through all words
    if (gameState.attemptedWords >= game.words.length) {
        finishWordGame(game);
        return;
    }
    
    // Get current word
    const wordObj = gameState.words[gameState.attemptedWords];
    
    // Scramble the word
    const scrambled = scrambleWord(wordObj.word);
    
    // Set up timer duration based on difficulty
    let timerDuration = 30; // Default
    if (wordObj.difficulty === 'easy') timerDuration = 20;
    if (wordObj.difficulty === 'medium') timerDuration = 30;
    if (wordObj.difficulty === 'hard') timerDuration = 45;
    if (wordObj.difficulty === 'expert') timerDuration = 60;
    
    gameState.timeLeft = timerDuration;
    
    // Create word game HTML
    let wordHTML = `
        <div class="word-container">
            <div class="word-prompt">
                <p>Unscramble this privacy term:</p>
                <p><strong>Hint:</strong> ${wordObj.hint}</p>
            </div>
            <div class="scrambled-word">${scrambled}</div>
            <input type="text" class="word-input" placeholder="Type your answer here" autocomplete="off">
            <div class="word-timer">
                <div class="word-timer-fill"></div>
            </div>
            <div class="timer-text">${timerDuration} seconds remaining</div>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = wordHTML;
    
    // Set up input handler
    const input = document.querySelector('.word-input');
    input.focus();
    
    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            checkWordAnswer(game);
        }
    });
    
    // Start timer
    startWordTimer(game, timerDuration);
}

function scrambleWord(word) {
    // Convert to array, shuffle, and join back
    const letters = word.split('');
    
    // Fisher-Yates shuffle algorithm
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    
    // Make sure it's not the same as original
    const scrambled = letters.join('');
    if (scrambled === word) {
        return scrambleWord(word); // Try again if same as original
    }
    
    return scrambled;
}

function startWordTimer(game, duration) {
    // Clear any existing timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timeLeft = duration;
    const timerFill = document.querySelector('.word-timer-fill');
    const timerText = document.querySelector('.timer-text');
    
    // Set initial width to 100%
    if (timerFill) {
        timerFill.style.width = '100%';
    }
    
    // Start timer
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        
        // Update timer display
        if (timerText) {
            timerText.textContent = `${gameState.timeLeft} seconds remaining`;
        }
        
        // Update timer bar
        if (timerFill) {
            const percentage = (gameState.timeLeft / duration) * 100;
            timerFill.style.width = `${percentage}%`;
        }
        
        // Time's up
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            timeUp(game);
        }
    }, 1000);
}

function timeUp(game) {
    const wordObj = gameState.words[gameState.attemptedWords];
    
    // Show feedback
    const wordHTML = `
        <div class="word-container">
            <div class="word-result wrong">
                <i class="fas fa-times-circle"></i> Time's up!
            </div>
            <div class="word-answer">
                The correct word was: <strong>${wordObj.word}</strong>
            </div>
            <button class="action-button" id="next-word">Next Word</button>
        </div>
    `;
    
    dom.gameContainer.innerHTML = wordHTML;
    
    // Set up button for next word
    document.getElementById('next-word').addEventListener('click', () => {
        gameState.attemptedWords++;
        showNextWord(game);
    });
}

function checkWordAnswer(game) {
    // Clear timer
    clearInterval(gameState.timerInterval);
    
    const wordObj = gameState.words[gameState.attemptedWords];
    const userInput = document.querySelector('.word-input').value.trim().toUpperCase();
    const correctWord = wordObj.word;
    
    // Check if answer is correct
    const isCorrect = userInput === correctWord;
    
    // Calculate points based on time left and difficulty
    let pointsEarned = 0;
    if (isCorrect) {
        let difficultyMultiplier = 1;
        if (wordObj.difficulty === 'medium') difficultyMultiplier = 1.5;
        if (wordObj.difficulty === 'hard') difficultyMultiplier = 2;
        if (wordObj.difficulty === 'expert') difficultyMultiplier = 3;
        
        pointsEarned = Math.round((gameState.timeLeft / 10) * difficultyMultiplier) * 5;
        updateScore(pointsEarned);
    }
    
    // Show feedback
    const resultClass = isCorrect ? 'correct' : 'wrong';
    const resultIcon = isCorrect ? 'check-circle' : 'times-circle';
    const resultText = isCorrect ? 'Correct!' : 'Incorrect!';
    
    const wordHTML = `
        <div class="word-container">
            <div class="word-result ${resultClass}">
                <i class="fas fa-${resultIcon}"></i> ${resultText}
            </div>
            <div class="word-answer">
                ${isCorrect ? `You earned ${pointsEarned} points!` : `The correct word was: <strong>${correctWord}</strong>`}
            </div>
            <button class="action-button" id="next-word">Next Word</button>
        </div>
    `;
    
    dom.gameContainer.innerHTML = wordHTML;
    
    // Set up button for next word
    document.getElementById('next-word').addEventListener('click', () => {
        gameState.attemptedWords++;
        showNextWord(game);
    });
}

function finishWordGame(game) {
    // Calculate final score percentage
    const scorePercentage = Math.round((gameState.score / game.maxScore) * 100);
    
    // Create completion HTML
    let completionHTML = `
        <div class="game-completion">
            <h3><i class="fas fa-trophy"></i> Word Scramble Completed!</h3>
            <div class="completion-score">
                <p>Your Score: ${gameState.score} / ${game.maxScore}</p>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${scorePercentage}%"></div>
                </div>
                <p class="score-percentage">${scorePercentage}%</p>
            </div>
            <div class="completion-message">
                ${getCompletionMessage(scorePercentage)}
            </div>
            <button class="action-button" id="finish-game">
                <i class="fas fa-check-circle"></i> Complete Game
            </button>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = completionHTML;
    
    // Save game results when completed
    document.getElementById('finish-game').addEventListener('click', () => {
        saveGameResults(game.id, gameState.score);
        
        // Return to game selection
        dom.gamePlayArea.style.display = 'none';
        dom.gameSelection.style.display = 'block';
    });
}

// =========================
// Scenario Game Implementation
// =========================

function initializeScenarioGame(game) {
    // Start with first scenario
    gameState.currentScenarioIndex = 0;
    showScenario(game);
}

function showScenario(game) {
    // Check if we've gone through all scenarios
    if (gameState.currentScenarioIndex >= game.scenarios.length) {
        finishScenarioGame(game);
        return;
    }
    
    // Get current scenario
    const scenario = game.scenarios[gameState.currentScenarioIndex];
    
    // Create scenario HTML
    let scenarioHTML = `
        <div class="scenario-container">
            <div class="scenario-progress">Scenario ${gameState.currentScenarioIndex + 1} of ${game.scenarios.length}</div>
            <div class="scenario-description">
                <p>${scenario.situation}</p>
            </div>
            <div class="scenario-options">
    `;
    
    // Add options
    scenario.options.forEach((option, index) => {
        scenarioHTML += `
            <div class="scenario-option" data-index="${index}" data-points="${option.points}">
                ${option.text}
            </div>
        `;
    });
    
    // Add feedback (hidden initially)
    scenarioHTML += `
            </div>
            <div class="scenario-feedback" style="display: none;">
                <h4>Feedback</h4>
                <p id="scenario-feedback-text"></p>
                <div class="points-earned">
                    <span id="scenario-points">0</span> points earned
                </div>
            </div>
            <div class="scenario-navigation">
                <button class="nav-button" id="scenario-next" style="display: none;">
                    Next Scenario <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = scenarioHTML;
    
    // Setup option click handlers
    const options = document.querySelectorAll('.scenario-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Ignore clicks if already selected
            if (option.classList.contains('selected')) {
                return;
            }
            
            // Handle selection
            selectScenarioOption(game, option, options);
        });
    });
}

function selectScenarioOption(game, selectedOption, allOptions) {
    const scenario = game.scenarios[gameState.currentScenarioIndex];
    const optionIndex = parseInt(selectedOption.dataset.index);
    const points = parseInt(selectedOption.dataset.points);
    const feedback = scenario.options[optionIndex].feedback;
    
    // Disable all options
    allOptions.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Mark selected
    selectedOption.classList.add('selected');
    
    // Mark best option
    let bestOption = null;
    let maxPoints = -1;
    
    allOptions.forEach(option => {
        const optPoints = parseInt(option.dataset.points);
        if (optPoints > maxPoints) {
            maxPoints = optPoints;
            bestOption = option;
        }
    });
    
    if (bestOption && bestOption !== selectedOption) {
        bestOption.classList.add('best-option');
    }
    
    // Update score
    updateScore(points);
    
    // Show feedback
    const feedbackElement = document.querySelector('.scenario-feedback');
    const feedbackText = document.getElementById('scenario-feedback-text');
    const pointsElement = document.getElementById('scenario-points');
    
    if (feedbackElement && feedbackText && pointsElement) {
        feedbackText.textContent = feedback;
        pointsElement.textContent = points;
        feedbackElement.style.display = 'block';
    }
    
    // Show next button
    const nextButton = document.getElementById('scenario-next');
    if (nextButton) {
        nextButton.style.display = 'inline-flex';
        nextButton.addEventListener('click', () => {
            gameState.currentScenarioIndex++;
            showScenario(game);
        });
    }
}

function finishScenarioGame(game) {
    // Calculate final score percentage
    const scorePercentage = Math.round((gameState.score / game.maxScore) * 100);
    
    // Create completion HTML
    let completionHTML = `
        <div class="game-completion">
            <h3><i class="fas fa-trophy"></i> Scenario Game Completed!</h3>
            <div class="completion-score">
                <p>Your Score: ${gameState.score} / ${game.maxScore}</p>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${scorePercentage}%"></div>
                </div>
                <p class="score-percentage">${scorePercentage}%</p>
            </div>
            <div class="completion-message">
                ${getCompletionMessage(scorePercentage)}
            </div>
            <button class="action-button" id="finish-game">
                <i class="fas fa-check-circle"></i> Complete Game
            </button>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = completionHTML;
    
    // Save game results when completed
    document.getElementById('finish-game').addEventListener('click', () => {
        saveGameResults(game.id, gameState.score);
        
        // Return to game selection
        dom.gamePlayArea.style.display = 'none';
        dom.gameSelection.style.display = 'block';
    });
}

// =========================
// Security Challenge Implementation
// =========================

function initializeSecurityGame(game) {
    // Start with first challenge
    gameState.challengeIndex = 0;
    showSecurityChallenge(game);
}

function showSecurityChallenge(game) {
    // Check if we've gone through all challenges
    if (gameState.challengeIndex >= game.challenges.length) {
        finishSecurityGame(game);
        return;
    }
    
    // Get current challenge
    const challenge = game.challenges[gameState.challengeIndex];
    
    // Create challenge HTML
    let challengeHTML = `
        <div class="security-container">
            <div class="security-progress">Challenge ${gameState.challengeIndex + 1} of ${game.challenges.length}</div>
            <div class="security-title">${challenge.title}</div>
            <div class="security-description">
                <p>${challenge.description}</p>
            </div>
            <div class="security-options">
    `;
    
    // Add options
    challenge.options.forEach((option, index) => {
        challengeHTML += `
            <div class="security-option" data-index="${index}" data-correct="${option.correct}">
                <span class="option-letter">${String.fromCharCode(65 + index)}</span> ${option.text}
            </div>
        `;
    });
    
    // Add feedback and navigation
    challengeHTML += `
            </div>
            <div class="security-feedback" style="display: none;">
                <p id="security-feedback-text"></p>
            </div>
            <div class="security-navigation">
                <button class="nav-button" id="security-next" style="display: none;">
                    Next Challenge <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = challengeHTML;
    
    // Setup option click handlers
    const options = document.querySelectorAll('.security-option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Ignore clicks if already selected
            if (option.classList.contains('selected')) {
                return;
            }
            
            // Handle selection
            selectSecurityOption(game, option, options);
        });
    });
}

function selectSecurityOption(game, selectedOption, allOptions) {
    const challenge = game.challenges[gameState.challengeIndex];
    const isCorrect = selectedOption.dataset.correct === 'true';
    
    // Disable all options
    allOptions.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Mark selected
    selectedOption.classList.add('selected');
    
    // Mark correct and incorrect
    allOptions.forEach(option => {
        if (option.dataset.correct === 'true') {
            option.classList.add('correct');
        } else if (option === selectedOption) {
            option.classList.add('wrong');
        }
    });
    
    // Update score if correct
    if (isCorrect) {
        const pointsPerChallenge = Math.floor(game.maxScore / game.challenges.length);
        updateScore(pointsPerChallenge);
    }
    
    // Show feedback
    const feedbackElement = document.querySelector('.security-feedback');
    const feedbackText = document.getElementById('security-feedback-text');
    
    if (feedbackElement && feedbackText) {
        feedbackText.textContent = challenge.explanation;
        feedbackElement.style.display = 'block';
    }
    
    // Show next button
    const nextButton = document.getElementById('security-next');
    if (nextButton) {
        nextButton.style.display = 'inline-flex';
        nextButton.addEventListener('click', () => {
            gameState.challengeIndex++;
            showSecurityChallenge(game);
        });
    }
}

function finishSecurityGame(game) {
    // Calculate final score percentage
    const scorePercentage = Math.round((gameState.score / game.maxScore) * 100);
    
    // Create completion HTML
    let completionHTML = `
        <div class="game-completion">
            <h3><i class="fas fa-trophy"></i> Security Challenge Completed!</h3>
            <div class="completion-score">
                <p>Your Score: ${gameState.score} / ${game.maxScore}</p>
                <div class="score-bar">
                    <div class="score-bar-fill" style="width: ${scorePercentage}%"></div>
                </div>
                <p class="score-percentage">${scorePercentage}%</p>
            </div>
            <div class="completion-message">
                ${getCompletionMessage(scorePercentage)}
            </div>
            <button class="action-button" id="finish-game">
                <i class="fas fa-check-circle"></i> Complete Game
            </button>
        </div>
    `;
    
    // Insert HTML
    dom.gameContainer.innerHTML = completionHTML;
    
    // Save game results when completed
    document.getElementById('finish-game').addEventListener('click', () => {
        saveGameResults(game.id, gameState.score);
        
        // Return to game selection
        dom.gamePlayArea.style.display = 'none';
        dom.gameSelection.style.display = 'block';
    });
}

// =========================
// Helper Functions
// =========================

// Save game results to user progress
function saveGameResults(gameId, score) {
    console.log(`Games.js saveGameResults called for ${gameId} with score ${score}`);
    if (window.ProgressTracker) {
        return window.ProgressTracker.saveGameResult(gameId, score);
    } else {
        console.error("ProgressTracker not available! Game progress won't be saved.");
        return false;
    }
}

// If your games.js has updateGameStats, modify to use ProgressTracker
function updateGameStats() {
    console.log("Games.js updateGameStats called");
    if (window.ProgressTracker) {
        const progress = window.ProgressTracker.getUserProgress();
        
        // Update game-specific UI with progress data
        // This depends on your specific implementation
        
        // Example:
        if (dom.progressBar && dom.progressPercentage) {
            const completedPercentage = progress.totalGames > 0 ? 
                Math.round(((progress.gamesCompleted || 0) / progress.totalGames) * 100) : 0;
            
            dom.progressBar.style.width = `${completedPercentage}%`;
            dom.progressPercentage.textContent = `${completedPercentage}%`;
        }
        
        // Update leaderboard 
        if (dom.leaderboard) {
            dom.leaderboard.innerHTML = '<li>You - ' + (progress.points || 0) + ' points</li>';
        }
    } else {
        console.error("ProgressTracker not available for updating UI!");
    }
}

// Get completion message based on score percentage
function getCompletionMessage(percentage) {
    if (percentage >= 90) {
        return '<p class="excellent">Excellent! Your knowledge of privacy concepts is outstanding!</p>';
    } else if (percentage >= 70) {
        return '<p class="good">Good job! You have a solid understanding of privacy principles.</p>';
    } else if (percentage >= 50) {
        return '<p class="average">Nice work! Keep learning to improve your privacy knowledge.</p>';
    } else {
        return '<p class="needs-improvement">You\'re making progress. Review the learning materials to strengthen your understanding.</p>';
    }
}

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}