'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstVar) => {
    count++;

    const currentCallNumber = count;

    if (currentCallNumber < 3 || currentCallNumber % 2 === 1) {
      return (secondVar) => {
        return firstVar + secondVar;
      };
    } else {
      return (secondVar) => {
        return 'Bzzz... Error!';
      };
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
