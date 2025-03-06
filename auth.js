document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            let username = document.getElementById("username").value.trim();
            if (username) {
                localStorage.setItem("currentUser", username);

                // Sjekk om brukeren har en lagret avatar
                let userData = JSON.parse(localStorage.getItem("userData")) || {};
                if (!userData[username] || !userData[username].avatar) {
                    window.location.href = "avatar.html"; // Første gang går til avatarvalg
                } else {
                    window.location.href = "index.html"; // Ellers rett til index.html
                }
            }
        });
    }

    function updateNav() {
        const navMenu = document.getElementById("navMenu");
        const userInfo = document.getElementById("userInfo");
        let currentUser = localStorage.getItem("currentUser");
        let userData = JSON.parse(localStorage.getItem("userData")) || {};
        let selectedAvatar = userData[currentUser]?.avatar || "gray";

        // Tøm navbar før vi legger til nye elementer
        navMenu.innerHTML = `<a href="index.html">Home</a>`;

        if (currentUser) {
            // Legg til avatar + brukernavn
            userInfo.innerHTML = `
                <a href="avatar.html" style="text-decoration: none;">
                    <div class="avatar-circle" style="background-color: ${selectedAvatar}; width: 50px; height: 50px; border-radius: 50%; cursor: pointer;"></div>
                </a>
                <span>${currentUser}</span>
            `;

            // Legg til "Logout"
            navMenu.innerHTML += `<a href="logout.html">Logout</a>`;
        } else {
            // Legg til "Login/Register" hvis brukeren ikke er logget inn
            navMenu.innerHTML += `<a href="register.html">Login/Register</a>`;
        }
    }

    updateNav();
});

