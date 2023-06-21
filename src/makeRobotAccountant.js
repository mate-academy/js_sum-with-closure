'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (num1) => {
    return (num2) => {
      const evenCount = (count > 3 && count % 2 === 0);
      const errorMessage = 'Bzzz... Error!';
      const sum = num1 + num2;

      count++;

      return evenCount ? errorMessage : sum;
    };
  };
}

module.exports = makeRobotAccountant;
