document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("theme-toggle");
        const themeIcon = document.getElementById("theme-icon");

        // Check if dark mode was previously enabled
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            themeIcon.textContent = "🌙";  // Night theme icon
        }

        // Toggle event listener
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeIcon.textContent = "🌙";  // Night icon
                localStorage.setItem("theme", "dark");
            } else {
                themeIcon.textContent = "☀️";  // Day icon
                localStorage.setItem("theme", "light");
            }
        });
    });

