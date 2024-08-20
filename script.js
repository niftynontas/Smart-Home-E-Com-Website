
let cartCount = 0;
let cartTotal = 0;

function addToCart(price) {
    cartCount++; // Increment the item count
    cartTotal += price; // Add the price of the item to the total

    // Update the displayed count and total
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

function showAlert(name, surname) {
    alert('Name: ' + name + '\nSurname: ' + surname);
}

function isFormEmpty() {
    var name = document.getElementById('name').value.trim();
    var surname = document.getElementById('surname').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || surname === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return false; // Indicates that the form is not complete
    }

    return true; // Indicates that the form is complete
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    if (!isFormEmpty()) {
        event.preventDefault(); // Prevents form submission if it's not complete
    } else {
        // Get the values from the input fields
        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;

        // Clear form fields
        this.reset();

        // Display a personalized message to the user
        alert('Thank you, ' + name + ' ' + surname + '! Your message has been sent.');
    }
});