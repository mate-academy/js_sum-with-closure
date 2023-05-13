'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let times = 0;

  return function getSum(a) {
    function x(b) {
      const sum = a + b;

      return times <= 3 || (times % 2 !== 0 && times >= 5) ? sum
        : 'Bzzz... Error!';
    };

    times++;

    return x;
  };
}

module.exports = makeRobotAccountant;
