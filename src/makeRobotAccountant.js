'use strict';

function makeRobotAccountant() {
  let counter = 0;

  return function(firstNumber) {
    counter++;

    return function(secondNumber) {
      return (counter > 3 && counter % 2 === 0)
        ? 'Bzzz... Error!' : firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
