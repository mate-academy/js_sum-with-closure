'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (num1) => {
    return (num2) => {
      counter++;

      if (counter % 4 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
