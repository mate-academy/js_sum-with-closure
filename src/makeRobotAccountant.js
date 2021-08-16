'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const getSum = function(firstNum) {
    calls++;

    return secondNum => {
      if (calls >= 4 && calls % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNum + secondNum;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
