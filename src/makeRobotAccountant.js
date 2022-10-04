'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let callTimes = 0;

  return (firstnNumber) => {
    return (secondNumber) => {
      callTimes++;

      sum = firstnNumber + secondNumber;

      const result = sum;

      sum = 0;

      if (callTimes > 3) {
        return callTimes % 2 ? result : 'Bzzz... Error!';
      }

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
