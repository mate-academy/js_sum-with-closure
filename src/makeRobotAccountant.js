'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  const getSum = function(firstSummand) {
    return function(secondSummand) {
      if (counter > 3 && counter % 2 === 0) {
        counter++;

        return 'Bzzz... Error!';
      }

      counter++;

      return firstSummand + secondSummand;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
