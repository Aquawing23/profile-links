const toggleButton = document.getElementById("toggle-btn");
toggleButton.addEventListener("click", toggleMode);
function toggleMode() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
      }