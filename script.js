document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.querySelector("form");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("input[type='text']").value.trim();
        const location = document.querySelector("input[type='text']:nth-of-type(2)").value.trim();
        const order = document.querySelector("input[type='text']:nth-of-type(3)").value.trim();
        const cooked = document.querySelector("input[type='radio']:checked");
        const paymentMethod = document.querySelector("select").value;

        if (!name || !location || !order || !cooked) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const orderDetails = `Name: ${name}\nLocation: ${location}\nOrder: ${order}\nCooked: ${cooked.nextElementSibling.textContent}\nPayment Method: ${paymentMethod}`;
        
        alert("Order Confirmed!\n\n" + orderDetails);
        orderForm.reset();
    });
});