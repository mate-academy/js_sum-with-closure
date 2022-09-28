'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (number1) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => {
        return `Bzzz... Error!`;
      };
    };

    return (number2) => {
      return number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
