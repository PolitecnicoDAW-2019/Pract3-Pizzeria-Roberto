class PizzaView {
  DOM = {
    preconfiguredPizzaPanel: document.getElementById('preconfiguredPizzasPanel')
  };

  bindCreatePreconfiguredPizzas = pizzasLoaderHandler => {
    pizzasLoaderHandler(PRECONFIGUREDPIZZAS_PATH).then(pizzas => {
      this.preconfiguredPizzas = pizzas;
      console.log(pizzas);
      const element = this.pizzaJsonToHTML(pizzas);
      this.DOM.preconfiguredPizzaPanel.innerHTML = element.innerHTML;
    });
  };

  pizzaJsonToHTML = pizzaJson => {
    return Object.entries(pizzaJson).reduce((fatherElement, [name, { price, image }]) => {
      const pizzaElement = document.createElement('div');
      pizzaElement.className = 'preconfiguratedPizza';
      const nameElement = document.createElement('h2');
      nameElement.innerText = name;
      const imageElement = document.createElement('img');
      imageElement.src = image;
      const buttonElements = this.createPriceButtons(price);

      pizzaElement.appendChild(imageElement);
      pizzaElement.appendChild(nameElement);
      pizzaElement.appendChild(buttonElements);
      fatherElement.appendChild(pizzaElement);
      return fatherElement;
    }, document.createElement('div'));
  };

  createPriceButtons = prices => {
    return Object.entries(prices).reduce((fatherElement, [size, price]) => {
      const buttonElement = document.createElement('button');
      buttonElement.value = `${size}-${price}`;
      buttonElement.innerHTML = `${size}<br>${price}€`;
      //buttonElement.onclick //TODO function to add pizza to the shopping cart

      fatherElement.appendChild(buttonElement);
      return fatherElement;
    }, document.createElement('div'));
  };
}
