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

    // Topping & Size Option Arrays
    const pizzaToppingOptions = ["None", "Bacon", "Goat Cheese", "Green Bellpeppers", "Pineapple"];
    const pizzaSizeOptions = ["Small (8 inch)", "Medium (12 inch)", "Large (18 inch)"];

    // Loop Through Each Pizza to Display Detail Options
    for (let pizzasToDisplay = 1; pizzasToDisplay <= pizzaQuantity; pizzasToDisplay++) {
        // Topping 1 Label
        const topping1Label = document.createElement("label");
        topping1Label.textContent = "Topping 1:";
        topping1Label.htmlFor = "pizza" + pizzasToDisplay + "-topping1";

        // Topping 1 Select
        const topping1Choice = document.createElement("select");
        topping1Choice.id = "pizza" + pizzasToDisplay + "-topping1";
        pizzaToppingOptions.forEach((topping) => {
            let option = document.createElement("option");
            option.value = topping;
            option.textContent = topping;
            topping1Choice.appendChild(option);
        });

        // Topping 2 Label
        const topping2Label = document.createElement("label");
        topping2Label.textContent = "Topping 2:";
        topping2Label.htmlFor = "pizza" + pizzasToDisplay + "-topping2";

        // Topping 2 Select
        const topping2Choice = document.createElement("select");
        topping2Choice.id = "pizza" + pizzasToDisplay + "-topping2";
        pizzaToppingOptions.forEach((topping) => {
            let option = document.createElement("option");
            option.value = topping;
            option.textContent = topping;
            topping2Choice.appendChild(option);
        });

        // Size Label
        const sizeLabel = document.createElement("label");
        sizeLabel.textContent = "Size:";
        sizeLabel.htmlFor = "pizza" + pizzasToDisplay + "-size";

        // Size Select
        const size = document.createElement("select");
        size.id = "pizza" + pizzasToDisplay + "-size";
        pizzaSizeOptions.forEach((sizeOption) => {
            let option = document.createElement("option");
            option.value = sizeOption;
            option.textContent = sizeOption;
            size.appendChild(option);
        });

        const space = document.createElement("br");

        pizzaDetails.appendChild(topping1Label);
        pizzaDetails.appendChild(topping1Choice);
        pizzaDetails.appendChild(topping2Label);
        pizzaDetails.appendChild(topping2Choice);
        pizzaDetails.appendChild(sizeLabel);
        pizzaDetails.appendChild(size);
        pizzaDetails.appendChild(space);
    }
}


window.addEventListener("load", function () {
    orderButton = document.querySelector("form");
    orderButton.addEventListener("submit", handleOrder);
    quantityButton = document.getElementById("quantity");
    quantityButton.addEventListener("input", updatePizzaDetailDisplay);
}) 