https://wallpapertag.com/wallpaper/full/2/1/7/324123-pizza-background-1500x2000-for-ipad.jpg


// Topping 1 Div
        const topping1Div = document.createElement("div")
        topping1Div.setAttribute("class", "input-group mb-3");


        // Topping 1 Label
        const topping1Label = document.createElement("label");
        topping1Label.textContent = "Topping 1:";
        topping1Label.htmlFor = "pizza" + pizzasToDisplay + "-topping1";

        // Topping 1 Select
        const topping1Choice = document.createElement("select");
        topping1Choice.id = "pizza" + pizzasToDisplay + "-topping1";
        topping1Choice.setAttribute("class", "input-group-text");
        pizzaToppingOptions.forEach((topping) => {
            let option = document.createElement("option");
            option.value = topping;
            option.textContent = topping;
            topping1Choice.appendChild(option);
        });

        // Append to Topping 1 Div
        topping1Div.appendChild(topping2Label);
        topping1Div.appendChild(topping2Choice);


        // Create Topping 2 Div
        const topping2Div = document.createElement("div")
        topping2Div.setAttribute("class", "input-group mb-3");

        // Topping 2 Label
        const topping2Label = document.createElement("label");
        topping2Label.textContent = "Topping 2:";
        topping2Label.htmlFor = "pizza" + pizzasToDisplay + "-topping2";

        // Topping 2 Select
        const topping2Choice = document.createElement("select");
        topping2Choice.id = "pizza" + pizzasToDisplay + "-topping2";
        topping2Choice.setAttribute("class", "input-group-text");
        pizzaToppingOptions.forEach((topping) => {
            let option = document.createElement("option");
            option.value = topping;
            option.textContent = topping;
            topping2Choice.appendChild(option);
        });

        // Append to Topping 2 Div
        topping2Div.appendChild(topping2Label);
        topping2Div.appendChild(topping2Choice);
