'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const workingCounts = 3;
  const errorMessage = 'Bzzz... Error!';
  let callsCount = 0;

  return (x) => {
    return (y) => {
      callsCount++;

      const even = callsCount % 2 === 0;
      const broken = callsCount > workingCounts && even;

      if (broken) {
        return errorMessage;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
