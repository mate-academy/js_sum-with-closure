'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (firstValue) => {
    return (secondValue) => {
      callsCount++;

      if ((callsCount > 3) && (callsCount % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
