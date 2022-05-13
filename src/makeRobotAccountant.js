'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function addCount(a) {
    count++;

    return function sumRes(b) {
      return (count % 2 !== 0 || count <= 3) ? a + b : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
