const categoryButtons = document.querySelectorAll(".categories button");
categoryButtons[0].classList.add("active");
const products = document.querySelectorAll(".produit-card");
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => {
    btn.classList.remove("active");
});
button.classList.add("active");
        const category = button.getAttribute("data-category");
        products.forEach(product => {
            if (category === "tous" || product.getAttribute("data-category") === category) {
    product.style.display = "block";
} else {
    product.style.display = "none";
}    
        });
    });
});
