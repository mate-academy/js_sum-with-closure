'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let c = 0;

  function sum(first) {
    c++;

    function err() {
      return 'Bzzz... Error!';
    }

    function res(second) {
      return first + second;
    }

    if (c > 3 && c % 2 === 0) {
      return err;
    }

    return res;
  };

  return sum;
}

module.exports = makeRobotAccountant;
