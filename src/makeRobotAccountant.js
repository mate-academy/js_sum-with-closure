'use strict';

/**
 *
 * @return {function}
 */

 function makeRobotAccountant() {
  let counter = 0;

  return function sum (x) {
    return function sum1 (y) {
      const result = x + y
      counter++;
      if(counter < 3) {
        return result
      }
      return counter % 2 === 0 ? 'Bzzz... Error!' : result;
    }
  }
}

module.exports = makeRobotAccountant;
