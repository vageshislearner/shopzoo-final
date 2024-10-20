// Variables to store cart data
let cart = [];
let totalPrice = 0;

// Select elements
const emptyCartMessage = document.getElementById('empty-cart');
const cartItems = document.getElementById('cart-items');
const cartList = document.getElementById('cart-list');
const totalPriceElement = document.getElementById('total-price');

// Add event listeners to all add-to-cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        addToCart(productName, productPrice);
    });
});

// Function to add items to the cart
function addToCart(product, price) {
    // Add product to cart array
    cart.push({ product, price });

    // Update total price
    totalPrice += price;

    // Update cart display
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    // Show or hide cart elements based on whether items exist
    if (cart.length > 0) {
        emptyCartMessage.style.display = 'none';  // Hide empty cart message
        cartItems.style.display = 'block';  // Show cart items

        // Update cart list
        cartList.innerHTML = '';
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.product} - ₹${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
        });

        // Update total price
        totalPriceElement.textContent = `₹${totalPrice.toFixed(2)}`;
    } else {
        emptyCartMessage.style.display = 'flex';  // Show empty cart message
        cartItems.style.display = 'none';  // Hide cart items
    }
}
