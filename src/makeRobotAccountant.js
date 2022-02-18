'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let isWorkable = true;
  let successfulCalls = 3;

  return (valueA) => (valueB) => {
      if (successfulCalls) {
        --successfulCalls;
      } else {
        isWorkable = !isWorkable;
      }

      if (!isWorkable) {
        return 'Bzzz... Error!';
      }

      return valueA + valueB;
    };
}

module.exports = makeRobotAccountant;
