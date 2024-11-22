'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return function getSum(number1) {
    countCalls++;

    return (number2) => {
      if (countCalls <= 3) {
        return number1 + number2;
      } else {
        return (countCalls % 2 === 0)
          ? 'Bzzz... Error!'
          : number1 + number2;
      }
    };
  };
}

module.exports = makeRobotAccountant;
