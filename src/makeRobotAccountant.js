'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (numberA) => {
    return (numberB) => {
      callsCount++;

      return callsCount < 3 || callsCount % 2
        ? numberA + numberB
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
