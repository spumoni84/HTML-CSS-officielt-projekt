// Basic interactivity for adding items to the cart
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});