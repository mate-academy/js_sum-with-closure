'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const getSum = (num1) => {
    return function(num2) {
      counter++;

      if (counter >= 4 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
