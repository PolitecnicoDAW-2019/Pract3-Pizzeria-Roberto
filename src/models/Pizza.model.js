class Pizza {
  constructor({ name, baseSize, image = '', price = 0, ingredients = {} }) {
    this.name = name;
    this.baseSize = baseSize;
    this.image = image;
    this.price = price;
    this.amount = 1;
    this.ingredients = ingredients;
    this.multiplier = this.setMultiplier();
  }

  setMultiplier = () => {
    const multipliers = {
      small: 1,
      medium: 1.1,
      large: 1.2
    };

    return multipliers[this.baseSize];
  };

  calculatePrice = () => {
    const totalIngredients = this.ingredients.reduce(
      (totalPrice, ingredientPrice) => {
        return totalPrice + this.multiplier * ingredientPrice;
      },
      0
    );

    const basePrices = {
      small: 3,
      medium: 5,
      large: 6
    };

    return totalIngredients + basePrices[this.baseSize];
  };
}
