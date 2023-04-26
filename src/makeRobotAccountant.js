'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num1) => {
    return (num2) => {
      count++;

      if (count === 4) {
        count = 0;

        return 'Bzzz... Error!';
      } else {
        return num1 + num2;
      }
    };
  };
}

module.exports = makeRobotAccountant;
