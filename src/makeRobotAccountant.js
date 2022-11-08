'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsLimit = 0;

  return (a) => {
    return (b) => {
      callsLimit += 1;

      if (callsLimit <= 3) {
        return a + b;
      }

      if (callsLimit % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
