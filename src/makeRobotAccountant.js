'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function sum(num1) {
    return function(num2) {
      if (counter === 3) {
        counter++;

        return 'Bzzz... Error!';
      }

      if (counter > 3 && counter % 2 !== 0) {
        counter++;

        return 'Bzzz... Error!';
      }
      counter++;

      return num1 + num2;
    };
  }

  return sum;
}

module.exports = makeRobotAccountant;
