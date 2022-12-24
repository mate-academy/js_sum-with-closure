'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (number1) => {
    return (number2) => {
      count++;

      if (count < 4 || count % 2 === 1) {
        return number1 + number2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
