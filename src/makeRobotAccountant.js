'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstOperand) => {
    return (secondOperand) => {
      counter += 1;

      return counter % 2 === 0 && counter > 3
        ? 'Bzzz... Error!'
        : firstOperand + secondOperand; ;
    };
  };
}

module.exports = makeRobotAccountant;
