'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const firstValue = (first) => {
    const secondValue = (second) => {
      count++;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };

    return secondValue;
  };

  return firstValue;
}

module.exports = makeRobotAccountant;
