'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSumm(x) {
    count++;

    return function(y) {
      if (count % 2 !== 0 || count === 2) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  // count++;
}

module.exports = makeRobotAccountant;
