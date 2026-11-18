const shippingform = document.getElementById('shipping-form');
const resetBtn = document.getElementById('reset-btn');
const resultBox = document.getElementById('result-box');

shippingform.addEventListener('submit', function (event) {
    event.preventDefault();

    const senderName = document.getElementById('senderName').value.trim();
    const receiverName = document.getElementById('receiverName').value.trim();
    const parcelWeight = parseFloat(document.getElementById('parcelWeight').value);
    const deliveryDistance = parseFloat(document.getElementById('deliveryDistance').value);
    const shippingMethod = document.getElementById('shippingMethod').value;

    // Perform shipping cost calculation (example logic - replace with actual calculation)
    let baseRate = 50;
    let weightRate = parcelWeight * 15; //per kg ₹15
    let distanceCost = deliveryDistance * 2; //per km ₹2
    let multiplier = 1;

    if (method === 'express') {
        multiplier = 1.5;
    } else if (method === 'overnight') {
        multiplier = 2.0;
    }

    const shippingCost = ((baseRate + weightRate + distanceCost) * multiplier).toFixed(2);

    // Display the result
    resultBox.innerHTML = `
       <strong>Shipping Summary:</strong><br>
       from: <b>${senderName}</b>&rarr; To: <b>${receiverName}</b><br>
       Method: <b>${method.toUpperCase()}</b><br>
       Estimate Cost: <b>₹${totalCost}</b>
       ~;
       resultBox.classList.remove('hidden');
});

// Reset button functionality
resetBtn.addEventListener('click', function () {
    shippingform.reset();
    resultBox.classList.add('hidden');
    resultBox.innerHTML = '';
});