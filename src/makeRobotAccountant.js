'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (num1) => {
    counter++;

    return (num2) => {
      if (counter <= 3) {
        return num1 + num2;
      } else {
        return counter % 2 !== 0 ? num1 + num2 : `Bzzz... Error!`;
      }
    };
  };
}

module.exports = makeRobotAccountant;
