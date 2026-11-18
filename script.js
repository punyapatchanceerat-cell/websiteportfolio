
const themeButton = document.getElementById("theme-button");
const themeIcon = themeButton.querySelector("i");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.className = "ri-sun-line";
    } else {
        themeIcon.className = "ri-moon-line";
    }
});
