document.addEventListener("DOMContentLoaded", function () {
    const avatarContent = document.getElementById("avatarContent");

    if (!avatarContent) {
        console.error("Error: #avatarContent is missing from the HTML.");
        return;
    }

    window.updateAvatarDisplay = function () {
        const avatarDisplay = document.getElementById("avatarDisplay");
        const selectedAvatar = localStorage.getItem("selectedAvatar");

        if (avatarDisplay && selectedAvatar) {
            avatarDisplay.innerHTML = `
              <a href="avatar.html">
                <div class="avatar-circle" style="background-color: ${selectedAvatar}; width: 50px; height: 50px; border-radius: 50%; border: 2px solid white;"></div>
              </a>
            `;
        }
    };

    function loadAvatarSelection() {
        const avatarGrid = document.querySelector(".avatar-grid");
        const confirmButton = document.getElementById("confirmButton");
        const removeAvatarButton = document.getElementById("removeAvatarButton");

        let selectedAvatar = localStorage.getItem("selectedAvatar");
        let firstTimeUser = !selectedAvatar;

        // Check if the URL contains the startLearning=true parameter
        const urlParams = new URLSearchParams(window.location.search);
        const isFromStartLearning = urlParams.get('startLearning') === 'true';

        // Show the Next button only if it's the first time or the user came from the Start Learning button
        if (firstTimeUser && isFromStartLearning) {
            confirmButton.style.display = 'block'; // Show the button
            confirmButton.textContent = "Next";
        } else {
            confirmButton.style.display = 'none'; // Hide the button if not the right condition
        }

        // Hide the Remove Avatar button if the user is coming from "Start Learning Now" and no avatar is selected
        if (firstTimeUser && isFromStartLearning) {
            removeAvatarButton.style.display = "none"; // Hide the remove button
        } else {
            // Show the Remove Avatar button if the user has a selected avatar and is not from "Start Learning Now"
            if (selectedAvatar) {
                removeAvatarButton.style.display = "block"; // Show remove button
            } else {
                removeAvatarButton.style.display = "none"; // Hide remove button
            }
        }

        const colors = ["gray", "red", "yellowgreen", "purple", "green", "black", "orange", "blue", "pink"];

        colors.forEach(color => {
            const avatar = document.createElement("div");
            avatar.classList.add("avatar");
            avatar.style.backgroundColor = color;

            avatar.addEventListener("click", function () {
                document.querySelectorAll(".avatar").forEach(av => av.classList.remove("selected"));
                avatar.classList.add("selected");
                selectedAvatar = color;
                localStorage.setItem("selectedAvatar", selectedAvatar);
                confirmButton.disabled = false;
                updateAvatarDisplay();
                
                // After selecting an avatar, hide the Remove Avatar button if the user came from the Start Learning Now page
                if (firstTimeUser && isFromStartLearning) {
                    removeAvatarButton.style.display = "none";
                } else {
                    removeAvatarButton.style.display = "block"; // Show remove button after avatar selection
                }
            });

            avatarGrid.appendChild(avatar);
        });

        confirmButton.addEventListener("click", function () {
            if (selectedAvatar) {
                window.location.href = firstTimeUser ? "learning.html" : "index.html";
            }
        });

        removeAvatarButton.addEventListener("click", function () {
            localStorage.removeItem("selectedAvatar"); // Remove avatar from storage
            updateAvatarDisplay(); // Update UI
            removeAvatarButton.style.display = "none"; // Hide the button
            confirmButton.textContent = "Next"; // Change button back to "Next"
            window.location.href = "avatar.html"; // Refresh avatar selection page
        });

        updateAvatarDisplay();
    }

    loadAvatarSelection();
});
