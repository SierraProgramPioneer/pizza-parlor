// Business Logic for Pizza Shop
function CurrentOrders() {
    this.orders = {};
    this.currentOrderId = 0;
}


CurrentOrders.prototype.addOrder = function (order) {
    order.orderId = this.assignOrderId();
    this.orders[order.orderId] = order;
};


CurrentOrders.prototype.assignOrderId = function () {
    this.currentOrderId += 1;
    return this.currentOrderId;
};


// Business Logic for Customer's Order
function CustomerOrder(customerName, orderType, pizzas) {
    this.customerName = customerName;
    this.pizzas = pizzas;
    this.orderType = orderType;
    this.orderTotal = 0;
}


CustomerOrder.prototype.addPizza = function (pizza, pizzaNumber) {
    pizza.pizzaNumber = pizzaNumber;
    this.pizzas[pizza.pizzaNumber] = pizza;
};


// Business Logic for Pizza
function Pizza(pizzaNumber, topping1, topping2, size) {
    this.pizzaNumber = pizzaNumber;
    this.topping1 = topping1;
    this.topping2 = topping2;
    this.size = size;
}


Pizza.prototype.calculatePrice = function (topping1, topping2, size) {
    if (topping1 === "None") {
        topping1Cost = 0
    }
    else {
        topping1Cost = 1;
    }
    if (topping2 === "None") {
        topping2Cost = 0
    }
    else {
        topping2Cost = 2;
    }
    if (size === "Small (8 inch)") {
        sizeCost = 10;
    }
    else if (size === "Medium (12 inch)") {
        sizeCost = 14;
    }
    else {
        sizeCost = 20;
    }
    this.price = topping1Cost + topping2Cost + sizeCost;
    return this.price;
};


// User Interface Logic
let currentOrders = new CurrentOrders();


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


function clearPizzaOrderDetails() {
    let customerName = document.getElementById("customerName");
    customerName.value = null;
    let quantity = document.getElementById("quantity");
    quantity.value = 0;
    let pizzaDetails = document.querySelector("#pizzaDetails");
    while (pizzaDetails.firstChild) {
        pizzaDetails.removeChild(pizzaDetails.firstChild);
    }
}


function handleOrder(event) {
    event.preventDefault();
    const customerName = document.getElementById("customerName").value;
    const orderType = document.getElementById("orderType").value;
    const pizzaQuantity = parseInt(document.getElementById("quantity").value);
    const pizzas = [];
    let customerOrder = new CustomerOrder(customerName, orderType, pizzas);
    for (pizzaNumber = pizzaQuantity; pizzaNumber > 0; pizzaNumber--) {
        const topping1key = "pizza" + pizzaNumber + "-topping1";
        const topping2key = "pizza" + pizzaNumber + "-topping2";
        const sizekey = "pizza" + pizzaNumber + "-size";
        const topping1 = document.getElementById(topping1key).value;
        const topping2 = document.getElementById(topping2key).value;
        const size = document.getElementById(sizekey).value;
        const newPizza = new Pizza(pizzaNumber, topping1, topping2, size);
        newPizza.calculatePrice(topping1, topping2, size);
        pizzas.push(newPizza);
    }
    currentOrders.addOrder(customerOrder);
    displayPizzasOrdered(currentOrders);
    clearPizzaOrderDetails();
}


function displayOrderDetails(event) {
    const id = (event.target.id);

    // Clear Current Details
    let pizzaOrderDiv = document.querySelector("div#pizzasOrdered");


    // Display Order Name
    const orderName = currentOrders.orders[id].customerName;
    const orderNameValue = document.createElement("h6");
    orderNameValue.textContent = "Order Name:" + " " + orderName;
    pizzaOrderDiv.appendChild(orderNameValue);

    // Display Order Type
    const orderType = currentOrders.orders[id].orderType;
    const orderTypeValue = document.createElement("h6");
    orderTypeValue.textContent = "Order Type:" + " " + orderType;
    pizzaOrderDiv.appendChild(orderTypeValue);

    // Display Order Total
    const orderTotal = currentOrders.orders[id].orderTotal;
    const orderTotalValue = document.createElement("h6");
    orderTotalValue.textContent = "Order Total:" + " " + "$" + orderTotal;
    pizzaOrderDiv.appendChild(orderTotalValue);


    // Display Pizzas' Details
    const orderDetails = currentOrders.orders[id].pizzas;
    const orderDetailsReverse = orderDetails.reverse();
    orderDetailsReverse.forEach((pizza) => {
        const pizzaNumberValue = document.createElement("h6");
        pizzaNumberValue.textContent = "Pizza:" + " " + pizza.pizzaNumber;
        const pizzaDetails = document.createElement("h6");
        pizzaDetails.textContent = "Topping 1:" + " " + pizza.topping1 + " " + " | " + "Topping 2:" + " " + pizza.topping2 + " " + " | " + "Size:" + " " + pizza.size;
        const priceValue = document.createElement("h6");
        priceValue.textContent = "Price:" + " " + "$" + pizza.price;
        pizzaOrderDiv.appendChild(pizzaNumberValue);
        pizzaOrderDiv.appendChild(pizzaDetails);
        pizzaOrderDiv.appendChild(priceValue);
    });
}


function displayPizzasOrdered(currentOrders) {
    let orderList = document.querySelector("div#pizzasOrdered");
    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }
    Object.keys(currentOrders.orders).forEach(function (key) {
        const order = currentOrders.orders[key];
        const li = document.createElement("li");
        li.append(order.customerName);
        li.setAttribute("id", order.orderId);
        orderList.append(li);
    })
}


window.addEventListener("load", function () {
    orderButton = document.querySelector("form");
    orderButton.addEventListener("submit", handleOrder);
    quantityButton = document.getElementById("quantity");
    quantityButton.addEventListener("input", updatePizzaDetailDisplay);
    pizzasOrdered = document.querySelector("div#pizzasOrdered");
    pizzasOrdered.addEventListener("click", displayOrderDetails);
}) 