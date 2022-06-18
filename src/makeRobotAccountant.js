'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(num1) {
    return (num2) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
