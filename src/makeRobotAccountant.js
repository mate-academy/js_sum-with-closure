'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(firstNum) {
    counter++;

    return (secondNum) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
