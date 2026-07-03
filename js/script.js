const products = [
    {
        name: "HP Pavilion Laptop",
        brand: "HP",
        price: "KES 75,000",
        image: "images/hp pavillion.jpg"
    },
    {
        name: "Samsung Galaxy A55",
        brand: "Samsung",
        price: "KES 48,000",
        image: "images/samsung A55.jpg"
    },
    {
        name: "Gaming Mouse G502",
        brand: "Logitech",
        price: "KES 6,000",
        image: "images/gaming-mouse.jpg"
    }
];

const productGrid = document.getElementById("productGrid");

products.forEach(product => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Price:</strong> ${product.price}</p>
    `;

    productGrid.appendChild(card);
});
// Wishlist Feature

const wishlistInput = document.getElementById("wishlistInput");
const addItemBtn = document.getElementById("addItemBtn");
const wishlist = document.getElementById("wishlist");

addItemBtn.addEventListener("click", function () {

    const item = wishlistInput.value.trim();

    if (item === "") {
        alert("Please enter a product.");
        return;
    }

    const li = document.createElement("li");

    li.textContent = item + " ";

    const removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(removeBtn);

    wishlist.appendChild(li);

    wishlistInput.value = "";
});