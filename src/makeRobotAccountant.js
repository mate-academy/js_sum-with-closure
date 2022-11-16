'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counted = 0;

  return (number1) => {
    return (number2) => {
      counted++;

      if (counted < 4 || counted % 2 === 1) {
        return number1 + number2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
