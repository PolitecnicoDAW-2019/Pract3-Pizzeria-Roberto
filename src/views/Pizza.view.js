class PizzaView {
  constructor() {
    this.shoppingCart = [];
    this.DOM.clearShoppingCart.onclick = this.clearShoppingCart;
  }

  DOM = {
    preconfiguredPizzaPanel: document.getElementById(
      'preconfiguredPizzasPanel'
    ),
    shoppingCartPanel: document.getElementById('shoppingCartPanel'),
    customPizzasPanel: document.getElementById('customPizzasPanel'),
    ingredientList: document.getElementById('ingredient-list'),
    clearShoppingCart: document.getElementById('clearShoppingCart')
  };

  clearShoppingCart = () => {
    this.DOM.shoppingCartPanel.innerHTML = '';
    this.shoppingCart = [];
  };

  bindLoadJson = handler => {
    handler(PRECONFIGUREDPIZZAS_PATH).then(json => {
      const pizzas = this.jsonToPizzaModel(json);
      const element = this.pizzasModelToHTML(pizzas);

      for (const pizzaElement of element) {
        this.DOM.preconfiguredPizzaPanel.appendChild(pizzaElement);
      }
    });

    handler(INGREDIENTS_PATH).then(json => {
      console.log(json);
      this.ingredients = this.jsonToIngredientModel(json);
      this.ingredientsModelToHTML(json);
    });
  };

  ingredientsModelToHTML = ingredients => {
    for (const ingredient of Object.entries(ingredients)) {
      console.log(ingredient);
      /*const inputElement = document.createElement('input');
      inputElement.type = 'radio';
      inputElement.name = 'ingredient';*/

      const element = document.createElement('div');
      //continue here

      this.DOM.ingredientList.appendChild(element);
    }
  };

  bindJsonToPizzaModel = handler => {
    this.jsonToPizzaModel = json => handler(json);
  };

  bindJsonToIngredientModel = handler => {
    this.jsonToIngredientModel = json => handler(json);
  };

  bindAddPizzaToShoppingCart = handler => {
    this.addPizzaToShoppingCart = pizza => {
      handler(pizza, this.shoppingCart);
      this.updateShoppingCart();
    };
  };
  // Merge this two methods into one?
  bindDeletePizzaFromShoppingCart = handler => {
    this.deletePizzaFromShoppingCart = pizza => {
      handler(pizza, this.shoppingCart);
      this.updateShoppingCart();
    };
  };

  bindCalculateTotalPrice = handler => {
    this.calculateTotalPrice = shoppingCart => handler(shoppingCart);
    this.updateShoppingCart(); // I call the function here to show the total price on startup
  };

  pizzasModelToHTML = pizzas => {
    return pizzas.map(pizzaByName => {
      const pizzaElement = document.createElement('div');
      pizzaElement.className = 'preconfiguratedPizza';

      const pizzaTemplate = pizzaByName[0];

      const nameElement = document.createElement('h2');
      nameElement.innerText = pizzaTemplate.name;
      const imageElement = document.createElement('img');
      imageElement.src = pizzaTemplate.image;

      const buttonpanel = this.createPreconfiguredPizzaButtons(pizzaByName);

      pizzaElement.appendChild(nameElement);
      pizzaElement.appendChild(imageElement);
      pizzaElement.appendChild(buttonpanel);
      return pizzaElement;
    });
  };

  createPreconfiguredPizzaButtons = pizzaByName => {
    return pizzaByName.reduce((father, pizza) => {
      const button = document.createElement('button');
      button.innerHTML = `${pizza.baseSize} <br> ${pizza.price}€`;
      button.onclick = () => this.addPizzaToShoppingCart(pizza);

      father.appendChild(button);
      return father;
    }, document.createElement('div'));
  };

  updateShoppingCart = () => {
    this.DOM.shoppingCartPanel.innerHTML = '';
    for (const pizza of this.shoppingCart) {
      const child = document.createElement('div');
      const spanName = document.createElement('span');
      spanName.textContent = `${pizza.name} - ${pizza.baseSize} ${pizza.price}€ x `;
      const spanAmount = document.createElement('span');
      spanAmount.textContent = pizza.amount;
      const buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Delete';
      buttonDelete.onclick = () => this.deletePizzaFromShoppingCart(pizza);

      child.appendChild(spanName);
      child.appendChild(spanAmount);
      child.appendChild(buttonDelete);
      this.DOM.shoppingCartPanel.appendChild(child);
    }

    const totalPrice = document.createElement('div');
    totalPrice.textContent = `TOTAL TO PAY: ${this.calculateTotalPrice(
      this.shoppingCart
    )}€`;
    this.DOM.shoppingCartPanel.appendChild(totalPrice);
  };
}
