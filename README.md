# Pizza Parlor

#### By Melissa Parker

## Table of Contents
1. Technologies Used
2. Description
3. Setup Requirements
4. Link
5. Tests
6. Known Bugs
7. License

## Technologies Used 

* HTML5
*  CSS5
*  JavaScript
*  Bootstrap
*  Test Driven Development

## Description

* This is an independent project assigned from Epicodus to demonstrate knowledge learned under Learn How to Program.
* This project is was part of the Object Oriented Programming Section.
* Users can place pizza orders and see other orders that are currently being made by the pizza parlor.  Each customer can order 1-10 pizzas, select up to 2 toppings, select a pizza size as well as specify if the pizza will be pick-up or delivery.
* TDD included in this file.

## Setup Requirements
1. Clone this repository to your desktop.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.

## Link

[Pizza Parlor](https://sierraprogrampioneer.github.io/pizza-parlor/)

## Tests
    Describe: CurrentOrders()
    Test: "It should return a CurrentOrders object with an empty array of orders"
    Code: currentOrders = new CurrentOrders;
    Expected Output:  CurrentOrders {orders: {…},       currentOrderId: 0}


    Describe: CurrentOrders.prototype.addOrder = function (order)
    Test: "It should add a CustomerOrder object to the CurrentOrders Object"
    Code: currentOrders.addOrder(myOrder);
    Expected Output: CurrentOrders {orders: {…}, currentOrderId: 1}  currentOrderId: 1 orders: {1: CustomerOrder}


    Describe: CurrentOrders.prototype.assignOrderId = function ()
    Test: "It will assign an order number to the the new CustomerOrder Object"
    Code: currentOrdersAssignId.assignOrderId(myOrder);
    Expected Output:  {1: CustomerOrder}  1: CustomerOrder orderId: 1
    

    Describe: CustomerOrder(customerName, orderType, pizzas)
    Test: "It will create a new Customer Order Object with Name, order Type and Pizzas in Order"
    Code: myOrder = new CustomerOrder("Melissa", "Delivery", myPizza);
    Expected Output:  CustomerOrder {customerName: 'Melissa', orderType: 'Delivery', pizzas: Pizza, orderTotal: 0}


    Describe: CustomerOrder.prototype.addPizza = function (pizza, pizzaNumber)
    Test: "It will add a pizza object to customer's order"
    Code: customerOrder.addPizza(myPizza, 1)
    Expected Output:  0: Pizza {pizzaNumber: 1, topping1: 'None', topping2: 'None', size: 'Small (8 inch)', price: 10}


    Describe: CustomerOrder.prototype.calculateTotal = function (pizzas, customerOrder)
    Test: "It will calculate the total price of all pizzas on customer's order."
    Code: myOrder.calculateTotal(pizzas, 1)
    0: Pizza {pizzaNumber: 2, topping1: 'None', topping2: 'None', size: 'Small (8 inch)', price: 10}
    1: Pizza {pizzaNumber: 1, topping1: 'Goat Cheese', topping2: 'None', size: 'Medium (12 inch)', price: 15}
    Expected Output: 25


    Describe: Pizza(pizzaNumber, topping1, topping2, size)
    Test: "It will create a new Pizza object with pizza number, topping 1, topping 2, and size"
    Code: myPizza = new Pizza (1, "pineapple", "goatcheese", "large");
    Expected Output: Pizza {pizzaNumber: 1, topping1: 'pineapple', topping2: 'goatcheese', size: 'large'}


    Describe: Pizza.prototype.calculatePrice = function (topping1, topping2, size)
    Test: "It will calculate the price of a Pizza Object based on its toppings and size.  Small pizzas are $10, medium $14, large $20 with the first topping being $1, the second topping being $2."
    Code: myPizza.calculatePrice("pineapple", "goatcheese", "Large (18 inch)");
    Expected Output: 23
    Code 2: myPizza.calculatePrice("pineapple", "none", "Small (8 inch)");
    Expected Output: 11


    
## Known Bugs

* Currently the placed order card duplicates if customer name is clicked more than once.  Background image does not load on gh-pages version.
* Last updated: January 28, 2024.

## License

[MIT](https://choosealicense.com/licenses/mit/) Copyright © 2024 Melissa Parker

Pizza Background Image from [wallpapertag.com](https://wallpapertag.com/wallpaper/full/2/1/7/324123-pizza-background-1500x2000-for-ipad.jpg)





