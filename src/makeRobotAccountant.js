'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCall = 0;

  return function getSum(firstValue) {
    countCall++;

    if (countCall < 3 || countCall % 2 === 1) {
      return (secondValue) => firstValue + secondValue;
    }

    return (secondValue) => 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
