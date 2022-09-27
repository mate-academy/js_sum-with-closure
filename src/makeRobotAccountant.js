'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let counter = 0;

  const getSum = (num1) => {
    return (num2) => {
      counter++;

      return (counter > 3 && counter % 2 === 0)
        ? 'Bzzz... Error!'
        : num1 + num2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
