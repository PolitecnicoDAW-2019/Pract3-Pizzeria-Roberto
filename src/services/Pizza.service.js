class PizzaService {
  loadPreconfiguredPizzas = jsonPath =>
    fetch(jsonPath).then(response => response.json());
}
