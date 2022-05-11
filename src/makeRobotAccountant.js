'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = -1;

  const getSum = (firstNum) => {
    return (secondNum) => {
      counter++;

      if (counter < 3 || counter % 2 === 0) {
        return firstNum + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
