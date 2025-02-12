// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
);

// Función para alternar el modo oscuro y actualizar localStorage
function toggleTheme() {
  const isDarkMode = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDarkMode ? "dark" : "light";
}

// Llamar a la función al ejecutar el toggle
toggleTheme();

// Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
