'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let check = 0;

  return (number1) => {
    return (number2) => {
      check++;

      if (check > 3 & check % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
