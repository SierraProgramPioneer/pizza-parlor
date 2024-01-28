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


CustomerOrder.prototype.calculateTotal = function (pizzas, customerOrder) {
    let orderTotalRunning = 0;
    pizzas.forEach((pizza) => {
        const pizzaPrice = pizza.price;
        orderTotalRunning = orderTotalRunning + pizzaPrice;
    });
    customerOrder.orderTotal = orderTotalRunning;
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
        const pizzaNumber = document.createElement("h3");
        pizzaNumber.textContent = "Pizza #" + " " + pizzasToDisplay;

        // Create Topping 1 Div
        const topping1Div = document.createElement("div")
        topping1Div.setAttribute("class", "input-group mb-3");

        // Topping 1 Label
        const topping1Label = document.createElement("label");
        topping1Label.textContent = "Topping 1:";
        topping1Label.htmlFor = "pizza" + pizzasToDisplay + "-topping1";
        topping1Label.setAttribute("class", "input-group-text");

        // Topping 1 Select
        const topping1Choice = document.createElement("select");
        topping1Choice.id = "pizza" + pizzasToDisplay + "-topping1";
        topping1Choice.setAttribute("class", "form-select");
        pizzaToppingOptions.forEach((topping) => {
            let option = document.createElement("option");
            option.value = topping;
            option.textContent = topping;
            topping1Choice.appendChild(option);
        });

        // Append Topping 1 Label & Options to Topping 1 Div
        topping1Div.appendChild(topping1Label);
        topping1Div.appendChild(topping1Choice);

        // Create Topping 2 Div
        const topping2Div = document.createElement("div")
        topping2Div.setAttribute("class", "input-group mb-3");

        // Topping 2 Label
        const topping2Label = document.createElement("label");
        topping2Label.textContent = "Topping 2:";
        topping2Label.htmlFor = "pizza" + pizzasToDisplay + "-topping2";
        topping2Label.setAttribute("class", "input-group-text");

        // Topping 2 Select
        const topping2Choice = document.createElement("select");
        topping2Choice.id = "pizza" + pizzasToDisplay + "-topping2";
        topping2Choice.setAttribute("class", "form-select");
        pizzaToppingOptions.forEach((topping) => {
            let option = document.createElement("option");
            option.value = topping;
            option.textContent = topping;
            topping2Choice.appendChild(option);
        });

        // Append Topping 2 Label & Options to Topping 2 Div
        topping2Div.appendChild(topping2Label);
        topping2Div.appendChild(topping2Choice);

        // Size Div
        const sizeDiv = document.createElement("div")
        sizeDiv.setAttribute("class", "input-group mb-3");

        // Size Label
        const sizeLabel = document.createElement("label");
        sizeLabel.textContent = "Size:";
        sizeLabel.htmlFor = "pizza" + pizzasToDisplay + "-size";
        sizeLabel.setAttribute("class", "input-group-text");

        // Size Select
        const size = document.createElement("select");
        size.id = "pizza" + pizzasToDisplay + "-size";
        size.setAttribute("class", "form-select");
        pizzaSizeOptions.forEach((sizeOption) => {
            let option = document.createElement("option");
            option.value = sizeOption;
            option.textContent = sizeOption;
            size.appendChild(option);
        });

        // Append Size Label & Options to Size Div
        sizeDiv.appendChild(sizeLabel);
        sizeDiv.appendChild(size);

        const space = document.createElement("br");
        pizzaDetails.appendChild(pizzaNumber);
        pizzaDetails.appendChild(topping1Div);
        pizzaDetails.appendChild(topping2Div);
        pizzaDetails.appendChild(sizeDiv);
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
    customerOrder.calculateTotal(pizzas, customerOrder);
    currentOrders.addOrder(customerOrder);
    displayPizzasOrdered(currentOrders);
    clearPizzaOrderDetails();

}



function displayOrderDetails(event) {
    const id = (event.target.id);

    // Get Pizza Order Div
    let pizzaOrderDiv = document.getElementById("orderDetailsDisplay");
    console.log(pizzaOrderDiv);

    // Display Order Name
    const orderValue = currentOrders.orders[id].customerName;
    console.log(orderValue);
    const orderNameElement = document.createElement("h6");
    orderNameElement.textContent = "Order Name:" + " " + orderValue;
    pizzaOrderDiv.appendChild(orderNameElement);

    // Display Order Type
    const orderTypeValue = currentOrders.orders[id].orderType;
    const orderTypeElement = document.createElement("h6");
    orderTypeElement.textContent = "Order Type:" + " " + orderTypeValue;
    pizzaOrderDiv.appendChild(orderTypeElement);

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
    let noOrders = document.getElementById("noOrders");
    noOrders.textContent = null;

    let orderList = document.querySelector("div#orders");
    while (orderList.firstChild) {
        orderList.removeChild(orderList.firstChild);
    }

    Object.keys(currentOrders.orders).forEach(function (key) {
        const order = currentOrders.orders[key];
        const h5 = document.createElement("h5");
        h5.append(order.customerName);
        h5.setAttribute("id", order.orderId);
        orderList.append(h5);
    })

    const orderDetailsDiv = document.createElement("div");
    orderDetailsDiv.setAttribute("id", "orderDetailsDisplay");
    orderList.appendChild(orderDetailsDiv);
}


window.addEventListener("load", function () {
    orderButton = document.querySelector("form");
    orderButton.addEventListener("submit", handleOrder);
    quantityButton = document.getElementById("quantity");
    quantityButton.addEventListener("input", updatePizzaDetailDisplay);
    pizzasOrdered = document.querySelector("div#orders");
    pizzasOrdered.addEventListener("click", displayOrderDetails);
}) 