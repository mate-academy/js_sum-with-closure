'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(a) {
    count++;

    function result(b) {
      return a + b;
    };

    if (count > 3 && count % 2 === 0) {
      return function() {
        return 'Bzzz... Error!';
      };
    };

    return result;
  }

  return sum;
}

module.exports = makeRobotAccountant;
