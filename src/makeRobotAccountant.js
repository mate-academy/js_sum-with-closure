'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (num1) => {
    callsCount++;

    return (num2) => {
      if (callsCount >= 4 && callsCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
