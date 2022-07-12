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

      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      }

      return firstOperand + secondOperand;
    };
  };
}

module.exports = makeRobotAccountant;
