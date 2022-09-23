'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return (a) => {
    return (b) => {
      callsCounter++;

      return (callsCounter < 4 || callsCounter % 2 !== 0)
        ? a + b
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
