'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(x) {
  let count = 0;

  return (firstCall) => {
    count++;

    return (secondCall) => {
      if (count <= 3 || count % 2 !== 0) {
        return firstCall + secondCall;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
