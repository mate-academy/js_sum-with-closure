'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstOperand) => {
    count++;

    return (secondOperand) => {
      if (count <= 3 || count % 2 !== 0) {
        return firstOperand + secondOperand;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
