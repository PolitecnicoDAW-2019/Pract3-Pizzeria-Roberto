class PizzaService {
  loadJson = jsonPath => fetch(jsonPath).then(response => response.json());

  jsonToPizzaModel = json => {
    return json.map(({ name, image, prices }) =>
      Object.entries(prices).map(
        ([size, value]) =>
          new Pizza({ name: name, baseSize: size, image: image, price: value })
      )
    );
  };
}
