'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (number2) => {
    return (number3) => {
      count++;

      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return number2 + number3;
        }
      }

      return number2 + number3;
    };
  };
}

module.exports = makeRobotAccountant;
