class Pizza {
  constructor({ name, image = '', baseSize, price = 0, ingredients = {} }) {
    this.name = name;
    this.image = image;
    this.baseSize = baseSize;
    this.price = price;
    this.amount = 1;
    this.ingredients = ingredients;
  }

  toString = () => `${this.name}-${this.baseSize}-${this.price}`;

  calculatePrice = () => {
    //test this
    this.price = this.ingredients.reduce((totalPrice, ingredientPrice) => {
      return totalPrice + ingredientPrice;
    }, 0);
  };
}
