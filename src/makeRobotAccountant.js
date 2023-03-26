'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let addingCount = 0;

  return function(firstValue) {
    return function(secondValue) {
      addingCount++;

      if (addingCount > 3 && addingCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
