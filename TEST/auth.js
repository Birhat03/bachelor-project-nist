document.addEventListener("DOMContentLoaded", function () {
    // Registrer bruker
    const registerBtn = document.getElementById("registerBtn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            let username = document.getElementById("registerUsername").value.trim();
            let password = document.getElementById("registerPassword").value.trim();
        
            if (username && password) {
                let users = JSON.parse(localStorage.getItem("users")) || {};
        
                if (users[username]) {
                    alert("Username already exists. Choose another one.");
                } else {
                    users[username] = { password: password };
                    localStorage.setItem("users", JSON.stringify(users));
        
                    // Automatisk logg inn og gå til avatarvalg
                    localStorage.setItem("currentUser", username);
                    window.location.href = "avatar.html";
                }
            } else {
                alert("Please enter both username and password.");
            }
        });
        
    }

    // Logg inn bruker
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            let username = document.getElementById("loginUsername").value.trim();
            let password = document.getElementById("loginPassword").value.trim();
            let users = JSON.parse(localStorage.getItem("users")) || {};

            if (users[username] && users[username].password === password) {
                localStorage.setItem("currentUser", username);

                // Sjekk om brukeren har en avatar
                let userData = JSON.parse(localStorage.getItem("userData")) || {};
                if (!userData[username] || !userData[username].avatar) {
                    window.location.href = "avatar.html"; // Første gang går til avatarvalg
                } else {
                    window.location.href = "index.html"; // Ellers rett til index.html
                }
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    function updateNav() {
        const navMenu = document.getElementById("navMenu");
        const userInfo = document.getElementById("userInfo");
        let currentUser = localStorage.getItem("currentUser");
        let userData = JSON.parse(localStorage.getItem("userData")) || {};
        let selectedAvatar = userData[currentUser]?.avatar || "gray";

        if (!navMenu) return;

        navMenu.innerHTML = `<a href="index.html">Home</a>`;

        if (currentUser) {
            if (userInfo) {
                userInfo.innerHTML = `
                    <a href="avatar.html" style="text-decoration: none;">
                        <div class="avatar-circle" style="background-color: ${selectedAvatar}; width: 50px; height: 50px; border-radius: 50%; cursor: pointer;"></div>
                    </a>
                    <span>${currentUser}</span>
                `;
            }
            if (!navMenu.innerHTML.includes("logout.html")) {
                navMenu.innerHTML += `<a href="logout.html">Logout</a>`;
            }
        } else {
            if (!navMenu.innerHTML.includes("register.html")) {
                navMenu.innerHTML += `<a href="register.html">Login/Register</a>`;
            }
        }
    }

    updateNav();
});
