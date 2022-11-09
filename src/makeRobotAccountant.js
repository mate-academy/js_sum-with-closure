'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberCall = 0;

  return function(x) {
    return function(y) {
      numberCall++;

      if (numberCall > 3 && numberCall % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };// write code here
}

module.exports = makeRobotAccountant;
