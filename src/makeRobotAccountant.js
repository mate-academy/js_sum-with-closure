'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function sumOfNumbers(x) {
    return function(y) {
      counter++;

      return counter === 2 || counter % 2 !== 0
        ? x + y
        : 'Bzzz... Error!';
    };
  };

  return sumOfNumbers;
}

module.exports = makeRobotAccountant;
