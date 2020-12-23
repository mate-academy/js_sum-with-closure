'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let step = 0;
  let stepAllowed = 3;

  const getFirstArguments = function(a) {
    const getNewArguments = function(b) {
      step++;

      const sum = a + b;

      if (step <= stepAllowed) {
        return sum;
      } else {
        step = 0;
        stepAllowed = 1;

        return 'Bzzz... Error!';
      }
    };

    return getNewArguments;
  };

  return getFirstArguments;
}

module.exports = makeRobotAccountant;
