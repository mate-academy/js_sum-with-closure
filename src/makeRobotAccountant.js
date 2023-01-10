'use strict';

/*
 *
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (firstNum) => {
    return (secondNum) => {
      counter++;

      if (counter > 3) {
        return counter % 2 === 0
          ? 'Bzzz... Error!'
          : firstNum + secondNum;
      }

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
