'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let count = 0;

  return firstNumber => secondNumber => {
    count++;

    if (count > 3 && !(count % 2)) {
      return `Bzzz... Error!`;
    }

    return firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
