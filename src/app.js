const app = new PizzaController(new PizzaView(), {
  pizzaService: new PizzaService(),
  shoppingCartService: new ShoppingCartService()
});
