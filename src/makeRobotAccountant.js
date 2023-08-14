'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const ERROR_MESSAGE = 'Bzzz... Error!';
  let counter = 0;

  return function getSum(x) {
    counter++;

    const isEvenCall = counter % 2 === 0;
    const isGreaterThenThree = counter > 3;

    return (y) => (isEvenCall && isGreaterThenThree)
      ? ERROR_MESSAGE
      : x + y;
  };
};

module.exports = makeRobotAccountant;
