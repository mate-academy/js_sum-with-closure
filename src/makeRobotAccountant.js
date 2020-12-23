'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let step = 0;

  const getFirstArguments = function(a) {
    const getNewArguments = function(b) {
      step++;

      const sum = a + b;

      if (step <= 3 || step % 2 !== 0) {
        return sum;
      } else {
        step = 0;

        return 'Bzzz... Error!';
      }
    };

    return getNewArguments;
  };

  return getFirstArguments;
}

module.exports = makeRobotAccountant;
