'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return x => {
    return y => {
      callsCounter++;

      if (callsCounter < 3 || callsCounter % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
