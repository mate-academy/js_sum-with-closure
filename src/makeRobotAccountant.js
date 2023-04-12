'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function(num1) {
    callCount++;

    return function(num2) {
      callCount++;

      const isEven = callCount % 2 === 0 && callCount > 3;
      const result = isEven ? 'Bzzz... Error!' : num1 + num2;

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
