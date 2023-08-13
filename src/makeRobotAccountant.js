'use strict';

/**
 * @return {function}
 */

function makeRobotAccountant() {
  const FINE_CALLS = 3;
  const ERROR_MSG = 'Bzzz... Error!';

  let numberOfCalls = 0;

  return (firstOperand) => {
    return (secondOperand) => {
      numberOfCalls += 1;

      if (numberOfCalls > FINE_CALLS && isEven(numberOfCalls)) {
        return ERROR_MSG;
      }

      return firstOperand + secondOperand;
    };
  };

  /**
   * @param {number} number
   *
   * @return {boolean}
   */
  function isEven(number) {
    return number % 2 === 0;
  }
}

module.exports = makeRobotAccountant;
