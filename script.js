const categoryButtons = document.querySelectorAll(".categories button");
const products = document.querySelectorAll(".produit-card");
const themeButton = document.getElementById("theme-toggle");
function filterProducts(category) {
const container = document.querySelector(".produits-container");
let visibleIndex = 0;
products.forEach(product => {
    const matches = category === "tous" ||
        product.getAttribute("data-category") === category;

    product.classList.remove("animation-produit");
    product.style.animation = "none";

    if (!matches) {
        product.style.display = "none";
        return;
    }

    product.style.display = "";

    void product.offsetWidth;

    product.style.animation = `monteeProduit 1s ease-out ${visibleIndex * 0.15}s both`;

    visibleIndex++;
});
if (container) {
    container.classList.toggle("produits-filtres", category !== "tous");
}
}


categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        filterProducts(button.getAttribute("data-category"));
    });
});

const savedTheme = localStorage.getItem("coffee-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    if (!themeButton) return;

    const isDark = document.body.classList.contains("dark-mode");

    themeButton.textContent = isDark
        ? "☀️ Mode clair"
        : "🌙 Mode sombre";

    themeButton.setAttribute(
        "aria-pressed",
        String(isDark)
    );
}

if (themeButton) {
    updateThemeButton();

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "coffee-theme",
            isDark ? "dark" : "light"
        );

        updateThemeButton();
    });
}