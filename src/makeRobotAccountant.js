'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return (firstArg) => {
    countCalls++;

    return (secondArg) => {
      if (countCalls > 3 && countCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstArg + secondArg;
    };
  };
}

module.exports = makeRobotAccountant;
