'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callsChecker = 0;

  return (num1) => {
    return (num2) => {
      callsChecker++;

      if (callsChecker > 3 && callsChecker % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };

  };
}

module.exports = makeRobotAccountant;
