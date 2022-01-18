'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let correction = 3;

  const accounting = function(firstNum) {
    return function(secondNum) {
      if (correction === 0) {
        correction++;

        return 'Bzzz... Error!';
      } else {
        correction--;

        return firstNum + secondNum;
      }
    };
  };

  return accounting;
}

module.exports = makeRobotAccountant;
