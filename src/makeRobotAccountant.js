'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (num1) => {
    return (num2) => {
      if (count % 2 === 0 && count > 3) {
        count++;

        return 'Bzzz... Error!';
      }
      count++;

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
