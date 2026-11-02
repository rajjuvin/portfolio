// This small enhancement switches colors. Content and navigation need no JS.
const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const darkThemeIsActive = document.documentElement.dataset.theme === "dark";
    const nextTheme = darkThemeIsActive ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    themeButton.setAttribute("aria-pressed", String(nextTheme === "dark"));
    themeButton.textContent = nextTheme === "dark" ? "Use light theme" : "Use dark theme";
  });

  // A reload returns to the light theme. No cookies or browser storage are used.
  themeButton.hidden = false;
}
