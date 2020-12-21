'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(b) {
      count++;

      if (count > 2 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else if (count > 3 && count % 2 !== 0) {
        return x + b;
      } else {
        return x + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
