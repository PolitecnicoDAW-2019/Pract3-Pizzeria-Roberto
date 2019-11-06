class Pizza {
  constructor({ name, baseSize, price, ingredients = {} }) {
    this.name = name;
    this.baseSize = baseSize;
    this.price = price;
    this.ingredients = ingredients;
  }
}
