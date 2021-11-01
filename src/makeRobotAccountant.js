'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function func1(num1) {
    return function(num2) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      } else {
        return num1 + num2;
      }
    };
  }

  return func1;
}

module.exports = makeRobotAccountant;
