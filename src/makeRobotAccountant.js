'use strict';

function makeRobotAccountant() {
  let count = 0;

  return function(firstNumber) {
    return (secondNumber) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
