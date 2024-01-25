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
    this.currentOrderId += 1;
    return this.currentOrderId;
}


// Business Logic for Customer's Order
function CustomerOrder(customerName, orderType, pizzas) {
    this.customerName = customerName;
    this.pizzas = pizzas;
    this.pizzaNumber = 0;
    this.orderType = orderType;
}


CustomerOrder.prototype.addPizza = function (pizza) {
    pizza.pizzaNumber = this.assignPizzaNumber();
    this.pizzas[pizza.pizzaNumber] = pizza;
}


CustomerOrder.prototype.assignPizzaNumber = function () {
    this.pizzaNumber += 1;
    return this.currentPizzaNumber;
}


// Business Logic for Pizza
function Pizza(topping1, topping2, size) {
    this.topping1 = topping1;
    this.topping2 = topping2;
    this.size = size;
}


// User Interface Logic
let currentOrders = new CurrentOrders();


function handleOrder(event) {
    event.preventDefault();
    const customerName = document.getElementById("customerName").value;
    const orderType = document.getElementById("orderType").value;
    const pizzaQuantity = parseInt(document.getElementById("quantity").value);
    const pizzas = [];
    for (pizzasToMake = pizzaQuantity; pizzasToMake > 0; pizzasToMake--) {
        pizzas.push(pizzasToMake)
    }
    let customerOrder = new CustomerOrder(customerName, orderType, pizzas);
    currentOrders.addOrder(customerOrder);
    console.log(currentOrders);
}


function updatePizzaDetailDisplay(event) {
    event.preventDefault();

    // Clear Current 
    let pizzaDetails = document.querySelector("#pizzaDetails");
    while (pizzaDetails.firstChild) {
        pizzaDetails.removeChild(pizzaDetails.firstChild);
    }

    // Get Pizza Quantity
    const pizzaQuantity = document.getElementById("quantity").value;

    // Loop Through Pizza Quantity to Display Pizza Details
    for (let pizzasToDisplay = 1; pizzasToDisplay <= pizzaQuantity; pizzasToDisplay++) {
        const topping1Label = document.createElement("label");
        topping1Label.textContent = "Topping 1:";
        topping1Label.htmlFor = "pizza" + pizzasToDisplay + "-topping1";
        pizzaDetails.appendChild(topping1Label);
        console.log(topping1Label);
    }
}


window.addEventListener("load", function () {
    orderButton = document.querySelector("form");
    orderButton.addEventListener("submit", handleOrder);
    quantityButton = document.getElementById("quantity");
    quantityButton.addEventListener("input", updatePizzaDetailDisplay);
}) 