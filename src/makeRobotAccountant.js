'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  return function(firstNum) {
    return function(secondNum) {
      if (countOfCalls === 3) {
        countOfCalls--;

        return 'Bzzz... Error!';
      }
      countOfCalls++;

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
