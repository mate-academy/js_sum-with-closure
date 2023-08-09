'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;
  const errorMessage = 'Bzzz... Error!';
  const sum = (x) => {
    return (y) => {
      callsCount++;

      if (callsCount <= 3 || callsCount % 2 !== 0) {
        return x + y;
      }

      return errorMessage;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
