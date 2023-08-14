'use strict';

/**
 *
 * @return {function}
 */
const ERROR_MESSAGE = 'Bzzz... Error!';

function makeRobotAccountant() {
  let callsCounter = 0;

  return (a) => {
    return (b) => {
      callsCounter++;

      if (callsCounter < 3 || callsCounter % 2 !== 0) {
        return a + b;
      }

      return ERROR_MESSAGE;
    };
  };
}

module.exports = makeRobotAccountant;
