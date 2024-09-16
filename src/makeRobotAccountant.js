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

      return count <= 3 || count % 2 === 1
        ? firstArgument + secondArgument
        : 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
