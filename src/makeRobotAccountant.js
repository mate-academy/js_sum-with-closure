'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const result = (firstOperand) => {
    return (secondOperand) => {
      calls++;

      return calls <= 3 || calls % 2 !== 0
        ? firstOperand + secondOperand
        : 'Bzzz... Error!';
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
