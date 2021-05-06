'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return firstNumber => secondNumber => {
    calls++;

    if (calls > 3 && calls % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return firstNumber + secondNumber;
  };
};

module.exports = makeRobotAccountant;
