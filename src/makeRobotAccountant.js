'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return function(firstNum) {
    calls++;

    return function(secondNum) {
      if (calls <= 3 || calls % 2 !== 0) {
        return firstNum + secondNum;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
