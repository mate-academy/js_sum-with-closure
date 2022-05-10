'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  function getSum1(a) {
    count++;

    function getSum2(b) {
      if (count <= 3 || count % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return getSum2;
  };

  return getSum1;
}

module.exports = makeRobotAccountant;
