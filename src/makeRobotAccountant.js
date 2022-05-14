'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (firstNum) => {
    counter++;

    return (secondNum) => {
      const sum = firstNum + secondNum;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
