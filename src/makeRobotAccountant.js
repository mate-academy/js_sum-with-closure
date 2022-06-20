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
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstAdder + secondAdder;
    };
  };
}

module.exports = makeRobotAccountant;
