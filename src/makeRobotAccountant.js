'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = function(firstAddition) {
    const getSumForSecondAddition = function(secondAddition) {
      counter++;

      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      }

      return firstAddition + secondAddition;
    };

    return getSumForSecondAddition;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
