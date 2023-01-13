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

     return counter > 3 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
