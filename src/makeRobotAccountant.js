'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (number1) => {
    return function(number2) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
