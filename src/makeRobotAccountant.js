'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstNum) {
    count++;

    return function(secondNum) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNum + secondNum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
