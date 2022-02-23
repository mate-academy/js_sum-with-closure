'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  const getSum = (number1) => {
    return (number2) => {
      numberOfCalls++;

      if (numberOfCalls <= 3 || numberOfCalls % 2) {
        return number1 + number2;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
