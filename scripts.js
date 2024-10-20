document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for home button
    const homeButton = document.getElementById('home-btn');

    homeButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#top').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Navbar toggle
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    // Initialize cart count
    let cartCount = 0;

    // Function to add an item to the cart
    function addToCart() {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
    }

    // Attach the function to the add to cart buttons
    const addToCartButtons = document.querySelectorAll('.cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
