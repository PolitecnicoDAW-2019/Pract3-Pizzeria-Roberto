class Pizza {
  constructor({ name, baseSize, image = '', price = 3, ingredients = {} }) {
    this.name = name;
    this.baseSize = baseSize;
    this.image = image;
    this.price = price;
    this.amount = 1;
    this.ingredients = ingredients;
    this.multiplier = this.getMultiplier();
  }

  getMultiplier = () => {
    const multipliers = {
      small: 1,
      medium: 1.1,
      large: 1.2
    };

    return multipliers[this.baseSize];
  };

  getBasePrice = () => {
    const basePrices = {
      small: 3,
      medium: 5,
      large: 6
    };

    return basePrices[this.baseSize];
  };

  updatePizzaSize = size => {
    this.baseSize = size;
    this.price = this.getBasePrice();
    this.multiplier = this.getMultiplier();
  };

  calculatePrice = () => {
    const totalIngredients = Object.values(this.ingredients).reduce(
      (totalPrice, ingredientPrice) =>
        totalPrice + this.multiplier * ingredientPrice,
      0
    );

    this.price = totalIngredients + this.getBasePrice(this.baseSize);
    return this.price.toFixed(2);
  };
}
