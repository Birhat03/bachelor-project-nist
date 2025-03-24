/**
 * Profile page functionality
 * Handles user profile management and avatar selection
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Profile page loading...");
    
    // Check login status
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "login.html";
        return;
    }
    
    // Load user data
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const userData = users[loggedInUser] || {};
    
    console.log("User data loaded:", loggedInUser);
    
    // Set username in profile
    const usernameElement = document.getElementById("profileUsername");
    if (usernameElement) {
        usernameElement.textContent = loggedInUser;
    }
    
    // Set current avatar
    updateCurrentAvatarDisplay(userData.avatar);
    
    // Initialize avatar grid before setting up progress
    initializeAvatarGrid();
    
    // Wait a small amount of time to ensure progress.js has loaded
    setTimeout(() => {
        // Load progress statistics
        updateProgressStatistics();
    }, 100);
    
    // Set up save button
    const saveButton = document.getElementById("saveProfileButton");
    if (saveButton) {
        saveButton.addEventListener("click", saveProfileChanges);
    }
});

// Update the current avatar display in the profile
function updateCurrentAvatarDisplay(avatar) {
    const currentAvatarElement = document.getElementById("currentAvatar");
    if (!currentAvatarElement) {
        console.error("Current avatar element not found!");
        return;
    }
    
    if (!avatar) {
        // Default avatar (should not happen if auth.js is working properly)
        avatar = getRandomDefaultAvatar();
        console.log("Using default avatar:", avatar);
    }
    
    try {
        // Check if it's a color or an icon
        if (avatar.startsWith('#') || avatar.match(/^[a-z]+$/)) {
            // It's a color
            currentAvatarElement.innerHTML = `
                <div style="width: 100%; height: 100%; background-color: ${avatar};"></div>
            `;
        } else if (avatar.startsWith('icon-')) {
            // It's an icon
            const iconName = avatar.substring(5); // Remove 'icon-' prefix
            currentAvatarElement.innerHTML = `
                <div style="width: 100%; height: 100%; background-color: #3a3a3a; display: flex; justify-content: center; align-items: center;">
                    <i class="fas fa-${iconName}" style="font-size: 50px; color: white;"></i>
                </div>
            `;
        } else {
            // It's an image
            currentAvatarElement.innerHTML = `
                <img src="${avatar}" alt="User Avatar" style="width: 100%; height: 100%; object-fit: cover;">
            `;
        }
    } catch (error) {
        console.error("Error updating avatar display:", error);
        // Fallback to a simple colored avatar
        currentAvatarElement.innerHTML = `
            <div style="width: 100%; height: 100%; background-color: #3498db;"></div>
        `;
    }
}

// Initialize the avatar selection grid
function initializeAvatarGrid() {
    console.log("Initializing avatar grid...");
    
    // Set up color avatars
    const colorGrid = document.querySelector('.color-avatars .avatar-grid');
    const colors = [
        "#3498db", "#e74c3c", "#2ecc71", "#f39c12", 
        "#9b59b6", "#1abc9c", "#34495e", "#e67e22",
        "#2980b9", "#c0392b", "#27ae60", "#d35400",
        "#8e44ad", "#16a085", "#2c3e50", "#f1c40f"
    ];
    
    // Get current user avatar - with error handling
    let currentAvatar = "";
    try {
        if (typeof getUserAvatar === 'function') {
            currentAvatar = getUserAvatar() || "";
        } else {
            // Fallback if getUserAvatar is not available
            const loggedInUser = localStorage.getItem("loggedInUser");
            const users = JSON.parse(localStorage.getItem("users")) || {};
            if (users[loggedInUser]) {
                currentAvatar = users[loggedInUser].avatar || "";
            }
        }
    } catch (error) {
        console.error("Error getting user avatar:", error);
    }
    
    if (colorGrid) {
        colorGrid.innerHTML = '';
        colors.forEach(color => {
            const avatarItem = document.createElement('div');
            avatarItem.className = 'avatar-item color';
            avatarItem.style.backgroundColor = color;
            avatarItem.dataset.avatar = color;
            
            // Check if this is the current avatar
            if (currentAvatar === color) {
                avatarItem.classList.add('selected');
            }
            
            avatarItem.addEventListener('click', function() {
                // Remove selected class from all avatars
                document.querySelectorAll('.avatar-item').forEach(item => {
                    item.classList.remove('selected');
                });
                
                // Add selected class to clicked avatar
                this.classList.add('selected');
            });
            
            colorGrid.appendChild(avatarItem);
        });
    } else {
        console.error("Color avatar grid not found!");
    }
    
    // Set up icon avatars
    const imageGrid = document.querySelector('.image-avatars .avatar-grid');
    const icons = [
        "user-astronaut", "user-ninja", "user-secret", "user-graduate",
        "cat", "dog", "dragon", "crow", 
        "horse", "hippo", "fish", "spider",
        "robot", "ghost", "hat-wizard", "snowman"
    ];
    
    if (imageGrid) {
        imageGrid.innerHTML = '';
        icons.forEach(icon => {
            const avatarItem = document.createElement('div');
            avatarItem.className = 'avatar-item image';
            avatarItem.style.display = 'flex';
            avatarItem.style.justifyContent = 'center';
            avatarItem.style.alignItems = 'center';
            avatarItem.style.backgroundColor = '#3a3a3a';
            avatarItem.style.color = '#fff';
            avatarItem.style.fontSize = '24px';
            avatarItem.dataset.avatar = `icon-${icon}`;
            avatarItem.innerHTML = `<i class="fas fa-${icon}"></i>`;
            
            // Check if this is the current avatar
            if (currentAvatar === `icon-${icon}`) {
                avatarItem.classList.add('selected');
            }
            
            avatarItem.addEventListener('click', function() {
                // Remove selected class from all avatars
                document.querySelectorAll('.avatar-item').forEach(item => {
                    item.classList.remove('selected');
                });
                
                // Add selected class to clicked avatar
                this.classList.add('selected');
            });
            
            imageGrid.appendChild(avatarItem);
        });
    } else {
        console.error("Icon avatar grid not found!");
    }
}

// Update progress statistics in the profile page
function updateProgressStatistics() {
    console.log("Updating progress statistics...");
    
    // Element existence checks
    const modulesProgressElement = document.getElementById("modulesProgress");
    const modulesPercentageElement = document.getElementById("modulesPercentage");
    const gamesProgressElement = document.getElementById("gamesProgress");
    const gamesPercentageElement = document.getElementById("gamesPercentage");
    const overallProgressElement = document.getElementById("overallProgress");
    const overallPercentageElement = document.getElementById("overallPercentage");
    
    if (!modulesProgressElement || !modulesPercentageElement || 
        !gamesProgressElement || !gamesPercentageElement ||
        !overallProgressElement || !overallPercentageElement) {
        console.error("One or more progress elements not found in the DOM!");
        return;
    }
    
    // Check if ProgressTracker is available
    if (window.ProgressTracker) {
        console.log("Using ProgressTracker...");
        // The progress tracker will handle all the updates
        window.ProgressTracker.updateUI();
    } else {
        console.log("ProgressTracker not found, using fallback...");
        // Fallback to existing implementation
        // Get progress data directly from localStorage or auth.js
        let userProgress = {};
        
        try {
            // Try to use auth.js function
            if (typeof getUserProgress === 'function') {
                userProgress = getUserProgress() || {};
            } else {
                // Fallback to direct localStorage access
                const loggedInUser = localStorage.getItem("loggedInUser");
                if (loggedInUser) {
                    const users = JSON.parse(localStorage.getItem("users") || "{}");
                    if (users[loggedInUser] && users[loggedInUser].progress) {
                        userProgress = users[loggedInUser].progress;
                    }
                }
            }
        } catch (error) {
            console.error("Error getting user progress:", error);
        }
        
        console.log("User progress data:", userProgress);
        
        // Examples of statistics to display
        const modulesCompleted = userProgress.completedModules || 0;
        const totalModules = userProgress.totalModules || 12; // Adjust to match your actual total
        
        const gamesCompleted = userProgress.gamesCompleted || 0;
        const totalGames = userProgress.totalGames || 5; // Adjust to match your actual total
        
        const pointsEarned = userProgress.points || 0;
        
        // Update the stats on the page
        const modulesCompletedElement = document.getElementById("modulesCompleted");
        const gamesCompletedElement = document.getElementById("gamesCompleted");
        const pointsEarnedElement = document.getElementById("pointsEarned");
        
        if (modulesCompletedElement) {
            modulesCompletedElement.textContent = `${modulesCompleted}/${totalModules}`;
        }
        
        if (gamesCompletedElement) {
            gamesCompletedElement.textContent = `${gamesCompleted}/${totalGames}`;
        }
        
        if (pointsEarnedElement) {
            pointsEarnedElement.textContent = pointsEarned;
        }
        
        // Calculate percentages for progress bars
        const modulesPercentage = Math.round((modulesCompleted / totalModules) * 100) || 0;
        const gamesPercentage = Math.round((gamesCompleted / totalGames) * 100) || 0;
        const overallPercentage = Math.round((modulesPercentage * 0.6 + gamesPercentage * 0.4)) || 0; // Weighted average
        
        // Update progress bars
        modulesProgressElement.style.width = `${modulesPercentage}%`;
        modulesPercentageElement.textContent = `${modulesPercentage}%`;
        
        gamesProgressElement.style.width = `${gamesPercentage}%`;
        gamesPercentageElement.textContent = `${gamesPercentage}%`;
        
        overallProgressElement.style.width = `${overallPercentage}%`;
        overallPercentageElement.textContent = `${overallPercentage}%`;
    }
}

// Save profile changes (including avatar)
function saveProfileChanges() {
    console.log("Saving profile changes...");
    
    // Get the selected avatar
    const selectedAvatar = document.querySelector('.avatar-item.selected');
    if (!selectedAvatar) {
        alert("Please select an avatar");
        return;
    }
    
    // Get avatar data (color or icon)
    const avatarValue = selectedAvatar.dataset.avatar;
    
    let success = false;
    
    try {
        // Save the avatar using the auth.js function if available
        if (typeof saveUserAvatar === 'function') {
            success = saveUserAvatar(avatarValue);
        } else {
            // Fallback if saveUserAvatar is not available
            const loggedInUser = localStorage.getItem("loggedInUser");
            if (loggedInUser) {
                let users = JSON.parse(localStorage.getItem("users") || "{}");
                if (!users[loggedInUser]) {
                    users[loggedInUser] = {};
                }
                users[loggedInUser].avatar = avatarValue;
                localStorage.setItem("users", JSON.stringify(users));
                success = true;
            }
        }
    } catch (error) {
        console.error("Error saving avatar:", error);
    }
    
    if (success) {
        // Update the current avatar display
        updateCurrentAvatarDisplay(avatarValue);
        
        // Show success message
        alert("Profile updated successfully!");
    } else {
        alert("Failed to update profile. Please try again.");
    }
}

// Get random avatar color (backup function)
function getRandomDefaultAvatar() {
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#34495e", "#e67e22"];
    return colors[Math.floor(Math.random() * colors.length)];
}

