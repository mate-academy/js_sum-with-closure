'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (operand1) => (operand2) => {
    count++;

    if (count >= 4 && count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return (operand1 + operand2);
  };
}

module.exports = makeRobotAccountant;
