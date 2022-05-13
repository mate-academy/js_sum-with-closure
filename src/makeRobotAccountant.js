'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let funcCallCounter = 0;

  const getSum = (num1) => {
    funcCallCounter++;

    return (num2) => {
      if (funcCallCounter > 3 && funcCallCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
