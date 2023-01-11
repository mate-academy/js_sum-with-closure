'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const numbers = (num1) => {
    const number = (num2) => {
      count++;

      if (count <= 3) {
        return num1 + num2;
      }

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      if (count > 3 || count % 2 !== 0) {
        return num1 + num2;
      }
    };

    return number;
  };

  return numbers;
}

module.exports = makeRobotAccountant;
