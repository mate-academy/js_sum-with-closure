'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const getSum = (firstValue) => {
    calls++;

    return (secondValue) => {
      if (calls <= 3 || calls % 2 !== 0) {
        return firstValue + secondValue;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
