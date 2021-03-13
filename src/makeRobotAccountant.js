'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let oddEvenChecker = -1;

  const summarize = (firstValue) => {
    oddEvenChecker++;

    const sumUp = (secondValue) => {
      if (oddEvenChecker < 3 || oddEvenChecker % 2 === 0) {
        return firstValue + secondValue;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return sumUp;
  };

  return summarize;
}

module.exports = makeRobotAccountant;
