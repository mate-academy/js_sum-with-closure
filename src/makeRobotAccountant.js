'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (num1) => {
    return (num2) => {
      if (count < 4 || count % 2 !== 0) {
        count++;

        return num1 + num2;
      }

      count++;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
