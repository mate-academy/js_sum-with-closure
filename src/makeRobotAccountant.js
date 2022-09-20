'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstVar) => {
    count++;

    const typeCondition = count < 3 || count % 2 === 1;

    if (typeCondition) {
      return (secondVar) => firstVar + secondVar;
    } else {
      return () => 'Bzzz... Error!';
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
