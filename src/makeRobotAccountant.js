'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsNumber = 0;

  return (a) => {
    return (b) => {
      ++callsNumber;

      if (callsNumber > 3 && !(callsNumber % 2)) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
