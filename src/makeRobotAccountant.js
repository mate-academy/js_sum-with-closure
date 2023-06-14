'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return a => {
    callsCounter++;

    return b => {
      if (callsCounter <= 3 || callsCounter % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
