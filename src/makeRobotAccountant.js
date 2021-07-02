'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return firstNumber => secondNumber => {
    count++;

    return (
      count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : firstNumber + secondNumber
    );
  };
}

module.exports = makeRobotAccountant;
