'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(firstArg) {
    count++;

    function getOneMore(secondArg) {
      return count <= 3 || count % 2 === 1
        ? firstArg + secondArg : `Bzzz... Error!`;
    }

    return getOneMore;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
