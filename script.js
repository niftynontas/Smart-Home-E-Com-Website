
let cartCount = 0;
let cartTotal = 0;

function addToCart(price) {
    cartCount++; // Increment the item count
    cartTotal += price; // Add the price of the item to the total
    
    // Update the displayed count and total
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}
