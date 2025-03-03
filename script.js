 document.getElementById("startLearningBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        let selectedAvatar = localStorage.getItem("selectedAvatar");

        if (!selectedAvatar) {
            window.location.href = "avatar.html"; // Redirect to avatar selection page
        } else {
            window.location.href = "learning.html"; // Redirect to learning page
        }
    });