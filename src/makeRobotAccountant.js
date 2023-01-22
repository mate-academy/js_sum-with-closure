'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstArgument) => {
    return (secondArgument) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstArgument + secondArgument;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
