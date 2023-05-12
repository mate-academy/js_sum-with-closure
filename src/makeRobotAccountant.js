'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let times = 0;

  return function getSum(a) {
    function x(b) {
      let sum = 0;

      sum += a + b;

      if (times <= 3) {
        return sum;
      }

      if (times % 2 !== 0 && times >= 5) {
        return sum;
      } else {
        return 'Bzzz... Error!';
      }
    };

    times++;

    return x;
  };
}

module.exports = makeRobotAccountant;
