/*
A coffee machine is defined below.
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee
only if the inserted amount is greater or equal than the price of the coffee!
*/

let coffeeMachine = {
    brand: "Super Coffee",
    prices: {
      cappuccino: 2.4,
      blackCoffee: 1.5,
      flatWhite: 3.0,
    },
    insertedAmount: 0,
    insertMoney: function (amount) {
      this.insertedAmount = amount;
    },
    getCoffee: function (coffee) {
      const insertMoney = this.insertedAmount;
      const coffeePrice = this.prices[coffee];
      if (insertMoney >= coffeePrice) {
        return `Please take your ${coffee}`;
      } else {
        return `Sorry you don't have enough moner for a ${coffee}`;
      }
    },
  };
  
  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  coffeeMachine.insertMoney(2.4);
  console.log(
    `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
      "cappuccino"
    )}`
  );
  
  coffeeMachine.insertMoney(1.5);
  console.log(
    `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
      "blackCoffee"
    )}`
  );
  
  coffeeMachine.insertMoney(4.0);
  console.log(
    `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
      "flatWhite"
    )}`
  );
  
  coffeeMachine.insertMoney(2.4);
  console.log(
    `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
      "flatWhite"
    )}`
  );