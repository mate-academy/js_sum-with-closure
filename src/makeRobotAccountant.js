'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const sumOfNums = (num1) => {
    return (num2) => {
      counter++;

      if (counter > 2 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return num1 + num2;
      }
    };
  };

  return sumOfNums;
}

module.exports = makeRobotAccountant;
