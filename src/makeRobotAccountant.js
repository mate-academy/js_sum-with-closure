'use strict';

function makeRobotAccountant() {
  let counter = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
