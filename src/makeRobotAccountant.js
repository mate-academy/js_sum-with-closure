'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return function(firstNum) {
    return function(secondNum) {
      counter++;

      if (counter < 4 || counter % 2 === 1) {
        return firstNum + secondNum;
      } else {
        return 'Bzzz... Error!';
      };
    };
  };
}

module.exports = makeRobotAccountant;
