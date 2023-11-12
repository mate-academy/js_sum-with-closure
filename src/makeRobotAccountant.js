'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  //
  let counter = 0;

  function getSum(number1) {
    function getSum2(number2) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    }

    return getSum2;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
