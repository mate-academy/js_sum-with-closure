'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = function(x) {
    const insideGetSum = function(y) {
      count++;

      if ((count % 2) === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };

    return insideGetSum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
