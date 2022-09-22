'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let oddReturn = 0;

  function sum(num1) {
    oddReturn++;

    return (num2) => {
      if (oddReturn > 3 && oddReturn % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return num1 + num2;
      }
    };
  }

  return sum;
};

module.exports = makeRobotAccountant;
