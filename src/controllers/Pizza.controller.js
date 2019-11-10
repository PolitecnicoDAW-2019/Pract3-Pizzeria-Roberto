class PizzaController {
  constructor(view, { pizzaService, shoppingCartService }) {
    this.view = view;
    this.pizzaService = pizzaService;
    this.shoppingCartService = shoppingCartService;

    this.view.bindLoadJson(this.handlerLoadJson);
    this.view.bindAddPizzaToShoppingCart(this.handlerAddPizzaToShoppingCart);
    this.view.bindDeletePizzaFromShoppingCart(
      this.handlerDeletePizzaFromShoppingCart
    );

    this.view.bindJsonToPizzaModel(this.handlerJsonToPizzaModel);
  }

  handlerLoadJson = path => this.pizzaService.loadJson(path);

  handlerAddPizzaToShoppingCart = (pizza, shoppingCart) =>
    this.shoppingCartService.addPizzaToShoppingCart(pizza, shoppingCart);

  handlerDeletePizzaFromShoppingCart = (pizza, shoppingCart) =>
    this.shoppingCartService.deletePizzaFromShoppingCart(pizza, shoppingCart);

  handlerJsonToPizzaModel = json => this.pizzaService.jsonToPizzaModel(json);
}
