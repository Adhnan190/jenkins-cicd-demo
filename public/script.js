// Simple function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Display result on page
document.addEventListener('DOMContentLoaded', function() {
    const result = addNumbers(5, 7);
    document.getElementById('result').textContent = `5 + 7 = ${result}`;
});

// Export function for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addNumbers };
}