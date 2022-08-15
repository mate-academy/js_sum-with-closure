'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const maxCount = 3;

  const sum = (x) => {
    count++;

    return function(y) {
      if (count > maxCount && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
