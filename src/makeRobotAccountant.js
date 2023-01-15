'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function firstNumber(x) {
    function secondsNumber(y) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    }

    return secondsNumber;
  }

  return firstNumber;
}

module.exports = makeRobotAccountant;
