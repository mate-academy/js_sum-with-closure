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
      if (counter <= 3 || counter % 2 !== 0) {
        return firstNum + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
