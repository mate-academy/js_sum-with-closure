'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(firstAdder) {
    count++;

    return function secondFn(secondAdder) {
      if (count !== 4) {
        return firstAdder + secondAdder;
      } else if (count === 4) {
        count = 0;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
