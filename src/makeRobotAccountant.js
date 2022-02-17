'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let willWork = true;
  let successfulCalls = 3;

  return (valueA) => {
    return (valueB) => {
      if (successfulCalls) {
        --successfulCalls;
      } else {
        willWork = !willWork;
      }

      if (!willWork) {
        return 'Bzzz... Error!';
      }

      return valueA + valueB;
    };
  };
}

module.exports = makeRobotAccountant;
