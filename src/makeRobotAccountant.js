'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSumInner(num1) {
    counter++;

    if (counter < 4) {
      return function(num2) {
        return num1 + num2;
      };
    } else {
      if (counter % 2 === 1) {
        return function(num2) {
          return num1 + num2;
        };
      } else {
        return function() {
          return 'Bzzz... Error!';
        };
      }
    }
  }

  return getSumInner;
}

module.exports = makeRobotAccountant;
