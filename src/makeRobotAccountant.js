'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (primalArgument) => {
    count++;

    const typeCondition = count < 3 || count % 2 === 1;

    if (typeCondition) {
      return (secondaryArgument) => primalArgument + secondaryArgument;
    }

    return () => 'Bzzz... Error!';
  };

  return getSum;
}

module.exports = makeRobotAccountant;
