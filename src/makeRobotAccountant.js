'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let bzzzCounter = 0;

  const getSum = (firstNum) => {
    bzzzCounter++;

    return (secondNum) => {
      if (bzzzCounter <= 3 || bzzzCounter % 2 !== 0) {
        return firstNum + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
