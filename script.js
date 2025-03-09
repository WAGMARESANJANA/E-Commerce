document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const cartCountElement = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".btn");
    const cartContainer = document.getElementById("cart-container");
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    let cart = [];

    // Simulated Login
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Login Successful!");
            window.location.href = "index.html";
        });
    }

    // Simulated Registration
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Registration Successful!");
            window.location.href = "login.html";
        });
    }

    // Add to Cart Functionality
    if (cartCountElement && addToCartButtons) {
        addToCartButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const product = button.parentElement;
                const productName = product.querySelector("p").textContent;
                const productPrice = parseInt(product.querySelector("span").textContent.replace("₹", ""));

                cart.push({ name: productName, price: productPrice });

                cartCountElement.textContent = cart.length;
                updateCartDisplay();
                alert(`${productName} added to cart!`);
            });
        });
    }

    // Update Cart UI
    function updateCartDisplay() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        totalPriceElement.textContent = `₹${total}`;
    }

    // Toggle Cart Visibility
    if (document.querySelector(".cart-link")) {
        document.querySelector(".cart-link").addEventListener("click", function (e) {
            e.preventDefault();
            cartContainer.style.display = cartContainer.style.display === "block" ? "none" : "block";
        });
    }
});
