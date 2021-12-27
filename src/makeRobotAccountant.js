'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;
  const accountant = (firstOperand) => {
    return (secondOperand) => {
      if (count === 0) {
        count = 1;

        return 'Bzzz... Error!';
      } else {
        count--;

        return firstOperand + secondOperand;
      }
    };
  };

  return accountant;
}

module.exports = makeRobotAccountant;
