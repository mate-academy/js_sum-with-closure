'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callsChecker = 3;

  return (num1) => {
    return (num2) => {
      if (callsChecker <= 0 && callsChecker % 2 === 0) {
        callsChecker--;

        return 'Bzzz... Error!';
      }
      callsChecker--;

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
