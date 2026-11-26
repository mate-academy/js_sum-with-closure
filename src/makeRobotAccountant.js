'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (num1) => {
    return (num2) => {
      count++;

      return (count % 2 === 1 || count === 2)
        ? num1 + num2
        : 'Bzzz... Error!';
    }

  };
}

module.exports = makeRobotAccountant;
