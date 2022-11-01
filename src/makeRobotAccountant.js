'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return function(number1) {
    return function(number2) {
      countCalls++;

      return countCalls > 3 && countCalls % 2 === 0
        ? 'Bzzz... Error!'
        : number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
