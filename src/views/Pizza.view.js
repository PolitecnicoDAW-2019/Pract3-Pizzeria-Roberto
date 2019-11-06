class PizzaView {
  DOM = {
    preconfiguredPizzaPanel: document.getElementById('preconfiguredPizzasPanel')
  };

  createPreconfiguredPizzas = pizzasLoaderHandler => {
    pizzasLoaderHandler(PRECONFIGUREDPIZZAS_PATH).then(pizzas => {
      this.preconfiguredPizzas = pizzas;
    });
  };
}
