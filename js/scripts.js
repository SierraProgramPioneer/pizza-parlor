function handleOrder(event) {
    event.preventDefault();
    console.log("Order Placed");
}

window.addEventListener("load", function () {
    orderButton = document.querySelector("form");
    orderButton.addEventListener("submit", handleOrder);
}) 