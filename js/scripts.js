// Business Logic for Pizza Shop
function CurrentOrders() {
    this.orders = {};
    this.currentOrderId = 0;
}

CurrentOrders.prototype.addOrder = function (order) {
    order.orderId = this.assignOrderId();
    this.orders[order.orderId] = order;
}

CurrentOrders.prototype.assignOrderId = function () {
    this.currentOrderId = + 1;
    return this.currentOrderId;
}

// Business Logic for Customer's Order
function CustomerOrder(customerName, orderType) {
    this.customerName = customerName;
    this.pizzas = {};
    this.orderType = orderType;
}

// Business Logic for Pizza
function Pizza() {
    this.toppings = {};
    this.size = size;
    this.price = price;
}

// User Interface Logic
let currentOrders = new CurrentOrders();


function handleOrder(event) {
    event.preventDefault();
    customerName = document.getElementById("customerName").value;
    orderType = document.getElementById("orderType").value;
    let customerOrder = new CustomerOrder(customerName, orderType);
    currentOrders.addOrder(customerOrder);
}

window.addEventListener("load", function () {
    orderButton = document.querySelector("form");
    orderButton.addEventListener("submit", handleOrder);
}) 