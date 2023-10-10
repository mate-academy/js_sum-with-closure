'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callsCounter = 0;

  return (a) => {
    return (b) => {
      callsCounter++;

      if (callsCounter < 3 || callsCounter % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
