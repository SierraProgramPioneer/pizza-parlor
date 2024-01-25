// Business Logic for Pizza Shop
function CurrentOrders() {
    this.orders = {};
    this.currentOrderId = 1;
}

// Business Logic for Customer's Order
function customerOrder(orderId, customerName, orderType) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.pizzas = {};
    this.orderType = orderType;
}

// Business Logic for Pizza


// User Interface Logic
let currentOrders = new CurrentOrders();


function handleOrder(event) {
    event.preventDefault();
    console.log("Order Placed");
}

window.addEventListener("load", function () {
    orderButton = document.querySelector("form");
    orderButton.addEventListener("submit", handleOrder);
}) 