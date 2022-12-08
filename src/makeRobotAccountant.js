'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counterOperations = 0;

  return (x) => {
    return (y) => {
      counterOperations += 1;

      if (counterOperations > 3 && counterOperations % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
