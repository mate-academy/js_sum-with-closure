'use strict';

function makeRobotAccountant() {
  let count = -1;

  return function(firstNumber) {
    count++;

    return (secondNumber) => {
      if (count >= 3 && count % 2 !== 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
