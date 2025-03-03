function updateAvatarDisplay() {
    const avatarDisplay = document.getElementById("avatarDisplay");
    const selectedAvatar = localStorage.getItem("selectedAvatar");
    if (selectedAvatar) {
        avatarDisplay.innerHTML = `
            <a href="avatar.html">  <div class="avatar-circle" style="background-color: ${selectedAvatar}; width: 50px; height: 50px; border-radius: 50%; border: 2px solid white;"></div> </a>
        `;
    }
}
updateAvatarDisplay();