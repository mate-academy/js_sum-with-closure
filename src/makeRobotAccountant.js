'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumCount = 0;

  const getSum = (firstArgument) => {
    return (secondArgument) => {
      sumCount++;

      if (sumCount > 3 && sumCount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstArgument + secondArgument;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
