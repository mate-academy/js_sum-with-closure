'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  return function (a) {
    return function (b) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }
      
      return a + b;
    }
  }
}


module.exports = makeRobotAccountant;
