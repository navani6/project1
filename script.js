const productsContainer = document.getElementById("products");
const cartCount = document.getElementById("cartCount");

let cart = 0;

// Generate 50 products (10 rows x 5 columns)
for (let i = 1; i <= 50; i++) {
    const product = document.createElement("div");
    product.className = "product";

    product.innerHTML = `
        <img src="https://via.placeholder.com/200?text=Gadget+${i}">
        <h4>Gadget ${i}</h4>
        <p>₹${1000 + i * 50}</p>
        <button onclick="addToCart()">Add to Cart</button>
    `;

    productsContainer.appendChild(product);
}

function addToCart() {
    cart++;
    cartCount.innerText = cart;
}
