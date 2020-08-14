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
      if (count <= 3 || count % 2 !== 0) {
        return firstNum + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
