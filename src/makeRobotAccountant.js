'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return (firstCall) => {
    return (secondCall) => {
      callsCounter++;

      if (callsCounter > 3 && callsCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstCall + secondCall;
    };
  };
}

module.exports = makeRobotAccountant;
