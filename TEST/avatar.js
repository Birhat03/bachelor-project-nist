document.addEventListener("DOMContentLoaded", function () {
    const avatarGrid = document.querySelector(".avatar-grid");
    const confirmButton = document.getElementById("confirmButton");
    const colors = ["gray", "red", "yellowgreen", "purple", "green", "black", "orange", "blue", "pink"];

    let currentUser = localStorage.getItem("currentUser");
    let userData = JSON.parse(localStorage.getItem("userData")) || {};
    let selectedAvatar = userData[currentUser]?.avatar || null;
    let tempSelectedAvatar = selectedAvatar; // Midlertidig lagring av valgt avatar

    confirmButton.textContent = "Confirm";

    colors.forEach(color => {
        const avatar = document.createElement("div");
        avatar.classList.add("avatar");
        avatar.style.backgroundColor = color;

        if (color === selectedAvatar) {
            avatar.classList.add("selected");
        }

        avatar.addEventListener("click", function () {
            document.querySelectorAll(".avatar").forEach(av => av.classList.remove("selected"));
            avatar.classList.add("selected");
            tempSelectedAvatar = color; // Lagre kun midlertidig

            confirmButton.disabled = false; // Aktiver bekreftelsesknappen
        });

        avatarGrid.appendChild(avatar);
    });

    confirmButton.addEventListener("click", function () {
        if (tempSelectedAvatar) {
            userData[currentUser] = { avatar: tempSelectedAvatar };
            localStorage.setItem("userData", JSON.stringify(userData));
        }
        window.location.href = "index.html"; // Etter valg av avatar, tilbake til index.html
    });
});
