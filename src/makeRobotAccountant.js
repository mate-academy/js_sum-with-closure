'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let countCall = 0;

  return (num1) => {
    return (num2) => {
      countCall++;

      if (countCall > 3 && countCall % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
