//STEPS WHEN YOU GO TO PIZZA SHOP

// 1. pizza shop i want to oder large Pizza with 10 toppings

// 2. Customer recieves a order number.

/*{
    orderNumber:
    PizzaAType:
    ETA: 10;
}
*/

const PizzaShop = require("./Pizzashop");

const shop = new PizzaShop();

shop.on("order", (data) => {
  // message user
  // message supervisor
  // message to regional head

  // meesage utkarsh team
  // message India head
  // message utkarsh itself

  const { orderNumber, pizzaTYPE, toppings } = data;

  console.log(
    `hey customer order number ${orderNumber} with ${pizzaTYPE} and topping ${toppings}`
  );
});

shop.order("Large", 20);
shop.order("Medium", 2);
shop.order("Small", 1);
