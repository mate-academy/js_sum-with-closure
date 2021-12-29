'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function sum(first) {
    counter++;

    function err() {
      return 'Bzzz... Error!';
    }

    function res(second) {
      return first + second;
    }

    if (counter > 3 && counter % 2 === 0) {
      return err;
    }

    return res;
  };

  return sum;
}

module.exports = makeRobotAccountant;
