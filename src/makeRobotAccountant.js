'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (number1) => {
    counter++;

    return (number2) => {
      if (counter <= 3) {
        return number1 + number2;
      } else {
        return counter % 2 !== 0 ? number1 + number2 : `Bzzz... Error!`;
      }
    };
  };
}

module.exports = makeRobotAccountant;
