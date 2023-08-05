'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counterFunction = 0;

  function getSum(firtsNumb) {
    counterFunction++;

    return function(secondNumb) {
      if ((counterFunction > 3) && counterFunction % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firtsNumb + secondNumb;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
