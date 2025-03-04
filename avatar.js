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

        const colors = ["gray", "red", "yellowgreen", "purple", "green", "black", "orange", "blue", "pink"];
        let selectedAvatar = localStorage.getItem("selectedAvatar"); // Get existing avatar
        let firstTimeUser = !selectedAvatar; // Check if user has no avatar stored

        confirmButton.textContent = firstTimeUser ? "Next" : "Confirm"; // Change button text accordingly

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
            });

            avatarGrid.appendChild(avatar);
        });

        confirmButton.addEventListener("click", function () {
            if (selectedAvatar) {
                window.location.href = firstTimeUser ? "learning.html" : "index.html"; // New users go to learning.html
            }
        });

        updateAvatarDisplay();
    }

    loadAvatarSelection();
});
