'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function getSum(num1) {
    counter++;

    const isEvenCall = counter % 2 === 0;
    const isGreaterThen3 = counter > 3;

    return (num2) => (isEvenCall && isGreaterThen3)
      ? 'Bzzz... Error!'
      : num1 + num2;
  };
};

module.exports = makeRobotAccountant;
