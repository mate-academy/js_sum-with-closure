'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(y) {
    count++;

    return (x) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
