'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSumInner(num1) {
    counter++;

    if (counter > 3) {
      if (counter % 2 === 1) {
        return function(num2) {
          return num1 + num2;
        };
      }

      return function() {
        return 'Bzzz... Error!';
      };
    }

    return function(num2) {
      return num1 + num2;
    };
  }

  return getSumInner;
}

module.exports = makeRobotAccountant;
