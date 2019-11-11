class PizzaService {
  loadJson = jsonPath => fetch(jsonPath).then(response => response.json());

  jsonToPizzaModel = json => {
    return json.map(({ name, image, prices }) =>
      Object.entries(prices).map(
        ([size, value]) =>
          new Pizza({ name: name, image: image, baseSize: size, price: value })
      )
    );
  };

  jsonToIngredientModel = json => {
    return Object.entries(json).map(
      ([name, { basePrice, size }]) => new Ingredient(name, basePrice, size)
    );
  };
}
/*Object.entries(prices).map(
        ([size, value]) =>
          new Pizza({ name: name, image: image, baseSize: size, price: value })
      )*/
