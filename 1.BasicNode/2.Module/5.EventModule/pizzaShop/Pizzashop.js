const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  #orderNumber = 0;

  order(size, toppings) {
    this.#orderNumber++;

    // process that order...
    // 1. Tzke the money.

    // ------  we can message here but the message should be decoupled. ---

    // console.log(
    //   `hey customer oder number ${
    //     this.#orderNumber
    //   } with ${size} and topping ${toppings}`
    // );

    // message user
    // message supervisor
    // message to regional head

    // meesage utkarsh team
    // message India head
    // message utkarsh itself

    // ------- SOLUTION FOR ABOVE problem ---------

    // EVENT DRIVEN.
    this.emit("order", {
      orderNumber: this.#orderNumber,
      pizzaTYPE: size,
      toppings,
    });
  }

  displayOrderNumber() {
    console.log("Pizza order Number ", this.#orderNumber);
  }
}

//export default PizzaShop; // do not do this.

module.exports = PizzaShop;
