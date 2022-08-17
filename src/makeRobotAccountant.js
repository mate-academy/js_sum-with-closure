'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let countOfAcounting = 0;

  const getSum = (firstNum) => {
    countOfAcounting++;

    return function(secondNum) {
      if (countOfAcounting > 3 && countOfAcounting % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
