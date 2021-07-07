'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robotAccountant = (firstOperand) => {
    count++;

    return (secondOperand) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstOperand + secondOperand;
    };
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
