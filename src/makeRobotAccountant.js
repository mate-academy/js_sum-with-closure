'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let isOdd = 0;
  let limitOfTry = 3;
  
  return function (a) {
    return b => {
      if (limitOfTry < 1 && isOdd) {
        isOdd ^=1;

        return a + b;
      } else if (limitOfTry < 1 && !isOdd) {
        isOdd ^= 1;

        return 'Bzzz... Error!';
      } else if (limitOfTry > 0) {
          limitOfTry--;

          return a + b;
      }
    }
  }
}

module.exports = makeRobotAccountant;
