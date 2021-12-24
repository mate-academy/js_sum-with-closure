'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  function sum(first) {
    count++;

    function err() {
      return 'Bzzz... Error!';
    }

    if (count > 3 && count % 2 === 0) {
      return err;
    }

    function result(second) {
      return first + second;
    }

    return result;
  };

  return sum;
}

module.exports = makeRobotAccountant;
