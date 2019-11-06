class PizzaController {
  constructor(view, { pizzaService, shoppingCartService }) {
    this.view = view;
    this.pizzaService = pizzaService;
    this.shoppingCartService = shoppingCartService;

    this.view.createPreconfiguredPizzas(this.handlerLoadPreconfiguredPizzas);
  }

  handlerLoadPreconfiguredPizzas = path =>
    this.pizzaService.loadPreconfiguredPizzas(path);
}
