'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function(a) {
    return function(b) {
      callCount++;

      if (callCount <= 3 || callCount % 2 === 1) {
        return a + b;
      } else if (callCount % 2 === 0) {
        return 'Bzzz... Error!';
      } ;
    };
  };
}

module.exports = makeRobotAccountant;
