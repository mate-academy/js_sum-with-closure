'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (primalArgument) => {
    count++;

    const inputCondition = count < 3 || count % 2 === 1;

    if (inputCondition) {
      return (secondArgument) => primalArgument + secondArgument;
    }

    return () => 'Bzzz... Error!';
  };

  return getSum;
}

module.exports = makeRobotAccountant;
