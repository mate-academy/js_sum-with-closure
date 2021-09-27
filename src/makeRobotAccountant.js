'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const getSum = (value) => {
    return function(secondValue) {
      counter++;

      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      }

      return value + secondValue;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
