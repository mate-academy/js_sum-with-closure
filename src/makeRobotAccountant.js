'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counterOfCalls = 0;

  return (firstArg) => {
    return (secondArg) => {
      const sum = firstArg + secondArg;

      counterOfCalls++;

      if (counterOfCalls > 3 && counterOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
