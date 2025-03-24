/**
 * Auth.js - Authentication and User Profile Management
 * Handles user registration, login, and profile management
 */

// At the top, add this log to track loading order
console.log("Auth.js loading...");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Auth.js DOM ready");
    
    // Add event listeners to forms if they exist
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            loginUser();
        });
    }
    
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            registerUser();
        });
    }
    
    const loginToggle = document.getElementById("loginToggle");
    const registerToggle = document.getElementById("registerToggle");
    if (loginToggle && registerToggle) {
        loginToggle.addEventListener("click", showLoginForm);
        registerToggle.addEventListener("click", showRegisterForm);
    }
    
    // Add session expiry check
    checkSessionExpiry();
    
    // Then check login status
    checkLoginStatus();
    
    // Update avatar display
    updateAvatarDisplay();
});

// Function to show error messages
function showError(message) {
    const errorElement = document.getElementById("errorMessage");
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    } else {
        console.error("Error:", message);
        alert(message);
    }
}

// Simple but consistent hash function
function simpleHash(str) {
    let hash = 0;
    if (str.length === 0) return hash.toString(16);
    
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(16); // Convert to hex string
}

// Show login form
function showLoginForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginToggle = document.getElementById("loginToggle");
    const registerToggle = document.getElementById("registerToggle");
    
    if (loginForm && registerForm && loginToggle && registerToggle) {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        loginToggle.classList.add("active");
        registerToggle.classList.remove("active");
    }
}

// Show register form
function showRegisterForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginToggle = document.getElementById("loginToggle");
    const registerToggle = document.getElementById("registerToggle");
    
    if (loginForm && registerForm && loginToggle && registerToggle) {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        loginToggle.classList.remove("active");
        registerToggle.classList.add("active");
    }
}

// Fixed register user function
function registerUser() {
    console.log("Attempting to register user...");
    
    const username = document.getElementById("registerUsername")?.value;
    const password = document.getElementById("registerPassword")?.value;
    const confirmPassword = document.getElementById("confirmPassword")?.value;
    
    if (!username || !password || !confirmPassword) {
        showError("Please fill in all fields");
        return;
    }
    
    if (password !== confirmPassword) {
        showError("Passwords do not match");
        return;
    }
    
    if (password.length < 6) {
        showError("Password must be at least 6 characters long");
        return;
    }
    
    try {
        let users = {};
        const usersData = localStorage.getItem("users");
        if (usersData) {
            users = JSON.parse(usersData);
        }
        
        if (users[username]) {
            showError("Username already exists");
            return;
        }
        
        // Hash the password before storing
        const hashedPassword = simpleHash(password);
        
        // Create user with default values
        users[username] = {
            password: hashedPassword, // Store hashed password
            avatar: getRandomDefaultAvatar(),
            progress: {
                completedModules: 0,
                totalModules: 5,
                passedQuizzes: 0,
                totalQuizzes: 10,
                points: 0,
                percentComplete: 0,
                modules: {},
                quizzes: {}
            },
            createdAt: new Date().toISOString()
        };
        
        localStorage.setItem("users", JSON.stringify(users));
        console.log("User registered successfully:", username);
        
        // Auto login after registration
        localStorage.setItem("loggedInUser", username);
        
        // Set session expiry - 24 hours by default
        const expiry = Date.now() + (24 * 60 * 60 * 1000);
        localStorage.setItem("sessionExpiry", expiry);
        
        // Redirect to home page
        window.location.href = "index.html";
    } catch (error) {
        console.error("Registration failed:", error);
        showError("Registration failed. Please try again.");
    }
}

// Fixed login user function
function loginUser() {
    console.log("Attempting to login user...");
    
    const username = document.getElementById("loginUsername")?.value;
    const password = document.getElementById("loginPassword")?.value;
    const rememberMe = document.getElementById("rememberMe")?.checked;
    
    if (!username || !password) {
        showError("Please enter both username and password");
        return;
    }
    
    try {
        const usersData = localStorage.getItem("users");
        if (!usersData) {
            showError("Invalid username or password");
            return;
        }
        
        let users = JSON.parse(usersData);
        
        // Simple hash for comparing passwords
        const hashedPassword = simpleHash(password);
        
        if (users[username]) {
            // Check if password matches (either original format or hashed)
            const storedPassword = users[username].password;
            const passwordMatches = storedPassword === password || storedPassword === hashedPassword;
            
            if (passwordMatches) {
                // Set user session
                localStorage.setItem("loggedInUser", username);
                
                // Set session expiry if not using "remember me"
                if (!rememberMe) {
                    const expiry = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
                    localStorage.setItem("sessionExpiry", expiry);
                } else {
                    localStorage.removeItem("sessionExpiry"); // No expiry with remember me
                }
                
                console.log("User logged in successfully:", username);
                
                // Use the redirect function
                redirectAfterLogin();
                return;
            }
        }
        
        showError("Invalid username or password");
    } catch (error) {
        console.error("Login failed:", error);
        showError("Login failed. Please try again.");
    }
}

// Function to log out
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("sessionExpiry");
    
    // Refresh the page to update UI
    location.reload();
}

// Updated checkLoginStatus function
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");
    const profileLinks = document.querySelectorAll('a[href="profile.html"]');
    
    if (loggedInUser) {
        // User is logged in
        if (loginButton) loginButton.style.display = "none";
        if (logoutButton) logoutButton.style.display = "inline-flex";
        
        // Show profile links
        profileLinks.forEach(link => {
            link.style.display = "inline-flex";
        });
        
        // Add profile link to nav if it doesn't exist
        const nav = document.querySelector('.nav');
        if (nav && !document.querySelector('a[href="profile.html"]')) {
            const profileLink = document.createElement('a');
            profileLink.href = "profile.html";
            profileLink.innerHTML = '<i class="fas fa-user"></i> Profile';
            nav.appendChild(profileLink);
        }
        
        // Update avatar in header
        updateAvatarDisplay();
        
    } else {
        // User is not logged in
        if (loginButton) loginButton.style.display = "inline-flex";
        if (logoutButton) logoutButton.style.display = "none";
        
        // Hide profile links
        profileLinks.forEach(link => {
            link.style.display = "none";
        });
        
        // Clear avatar container
        const avatarContainer = document.querySelector(".avatar-container");
        if (avatarContainer) {
            avatarContainer.innerHTML = `
                <div class="avatar-placeholder">
                    <i class="fas fa-user"></i>
                </div>
            `;
        }
    }
}

// Add this function to redirect after login
function redirectAfterLogin() {
    // Check if we're on the login page
    if (window.location.pathname.includes('login.html')) {
        window.location.href = "index.html";
    } else {
        // Just refresh the current page
        location.reload();
    }
}

// Function to update avatar display in header
function updateAvatarDisplay() {
    console.log("Auth.js: Updating avatar display");
    
    const avatarContainer = document.querySelector(".avatar-container");
    if (!avatarContainer) {
        console.warn("Auth.js: Avatar container not found");
        return;
    }
    
    // Clear any existing content first to prevent conflicts
    avatarContainer.innerHTML = '';
    
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if (!loggedInUser) {
        // User is not logged in - show placeholder
        avatarContainer.innerHTML = `
            <div class="avatar-placeholder">
                <i class="fas fa-user"></i>
            </div>
        `;
        return;
    }
    
    try {
        let users = JSON.parse(localStorage.getItem("users")) || {};
        const userAvatar = users[loggedInUser]?.avatar;
        
        if (userAvatar) {
            // Check if it's a color or an icon
            if (userAvatar.startsWith('#') || userAvatar.match(/^[a-z]+$/)) {
                // It's a color
                avatarContainer.innerHTML = `
                    <div class="avatar-display" onclick="window.location.href='profile.html'">
                        <div class="avatar-circle" style="background-color: ${userAvatar}; border: none;"></div>
                        <span class="user-name">${loggedInUser}</span>
                    </div>
                `;
            } else if (userAvatar.startsWith('icon-')) {
                // It's an icon-based avatar
                const iconName = userAvatar.substring(5); // Remove 'icon-' prefix
                avatarContainer.innerHTML = `
                    <div class="avatar-display" onclick="window.location.href='profile.html'">
                        <div class="avatar-icon">
                            <i class="fas fa-${iconName}"></i>
                        </div>
                        <span class="user-name">${loggedInUser}</span>
                    </div>
                `;
            } else {
                // It's an image path
                avatarContainer.innerHTML = `
                    <div class="avatar-display" onclick="window.location.href='profile.html'">
                        <img src="${userAvatar}" alt="User Avatar" class="avatar-image">
                        <span class="user-name">${loggedInUser}</span>
                    </div>
                `;
            }
        } else {
            // No avatar set, create default
            const defaultAvatar = getRandomDefaultAvatar();
            users[loggedInUser].avatar = defaultAvatar;
            localStorage.setItem("users", JSON.stringify(users));
            
            avatarContainer.innerHTML = `
                <div class="avatar-display" onclick="window.location.href='profile.html'">
                    <div class="avatar-circle" style="background-color: ${defaultAvatar}; border: none;"></div>
                    <span class="user-name">${loggedInUser}</span>
                </div>
            `;
        }
    } catch (error) {
        console.error("Error updating avatar display:", error);
        // Fallback to a simple display
        avatarContainer.innerHTML = `
            <div class="avatar-display" onclick="window.location.href='profile.html'">
                <div class="avatar-placeholder"><i class="fas fa-user"></i></div>
                <span class="user-name">${loggedInUser}</span>
            </div>
        `;
    }
    
    // Add a class to prevent further manipulation
    avatarContainer.classList.add('avatar-initialized');
}

// Unified avatar utility functions
function getRandomDefaultAvatar() {
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#34495e", "#e67e22"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function saveUserAvatar(avatar) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        try {
            let users = JSON.parse(localStorage.getItem("users")) || {};
            if (users[loggedInUser]) {
                users[loggedInUser].avatar = avatar;
                localStorage.setItem("users", JSON.stringify(users));
                updateAvatarDisplay();
                return true;
            }
        } catch (error) {
            console.error("Error saving user avatar:", error);
        }
    }
    return false;
}

// Function to get user avatar
function getUserAvatar() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        try {
            let users = JSON.parse(localStorage.getItem("users")) || {};
            if (users[loggedInUser]) {
                return users[loggedInUser].avatar;
            }
        } catch (error) {
            console.error("Error getting user avatar:", error);
        }
    }
    return null;
}

// Session expiry check function
function checkSessionExpiry() {
    const expiry = localStorage.getItem("sessionExpiry");
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    // If there's an expiry set and the user is logged in
    if (expiry && loggedInUser) {
        // Check if expired
        if (Date.now() > parseInt(expiry)) {
            console.log("Session expired, logging out");
            logoutUser();
        } else {
            // Refresh expiry for active users
            const newExpiry = Date.now() + (24 * 60 * 60 * 1000); // Another 24 hours
            localStorage.setItem("sessionExpiry", newExpiry);
        }
    }
}

// Expose these functions globally
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.registerUser = registerUser;
window.showLoginForm = showLoginForm;
window.showRegisterForm = showRegisterForm;
window.getUserAvatar = getUserAvatar;
window.saveUserAvatar = saveUserAvatar;