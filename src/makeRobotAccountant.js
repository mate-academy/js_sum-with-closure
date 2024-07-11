'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstValue) => {
    count++;

    return (secondValue) => {
      const sum = firstValue + secondValue;

      if (count >= 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
