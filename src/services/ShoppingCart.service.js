class ShoppingCartService {
  deletePizzaFromShoppingCart = (pizza, shoppingCart) => {
    const found = this.pizzaInShoppingCart(pizza, shoppingCart);
    found.amount > 1
      ? found.amount--
      : shoppingCart.splice(shoppingCart.indexOf(found), 1);
  };

  addPizzaToShoppingCart = (pizza, shoppingCart) => {
    const found = this.pizzaInShoppingCart(pizza, shoppingCart);
    found ? found.amount++ : shoppingCart.push(pizza);
  };

  pizzaInShoppingCart = (pizza, shoppingCart) => {
    return shoppingCart.find(pizzita => {
      const tempPizza = { ...pizzita };
      const tempPizzaOriginal = { ...pizza };
      tempPizza.amount = 1;
      tempPizzaOriginal.amount = 1;
      return JSON.stringify(tempPizza) === JSON.stringify(tempPizzaOriginal);
    });
  };

  calculateTotalPrice = shoppingCart =>
    shoppingCart.reduce(
      (totalPrice, pizza) =>
        parseFloat((totalPrice + pizza.price * pizza.amount).toFixed(2)),
      0
    );
}
