class PizzaController {
  constructor(view, { pizzaService, shoppingCartService }) {
    this.view = view;
    this.pizzaService = pizzaService;
    this.shoppingCartService = shoppingCartService;

    this.view.bindCreatePreconfiguredPizzas(
      this.handlerLoadPreconfiguredPizzas
    );
  }

  handlerLoadPreconfiguredPizzas = path =>
    this.pizzaService.loadPreconfiguredPizzas(path);
}
