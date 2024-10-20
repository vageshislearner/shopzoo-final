const stripe = Stripe('your-publishable-key-here');
const elements = stripe.elements();
const cardElement = elements.create('card');
cardElement.mount('#card-element');

const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
    });

    if (error) {
        // Display error.message in your UI
        console.error(error);
    } else {
        // Send paymentMethod.id to your server for processing
        console.log(paymentMethod.id);
    }
});