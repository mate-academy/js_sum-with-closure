'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let countOfCall = 0;
  const countOfCallWithoutError = 3;
  const errorMessage = 'Bzzz... Error!';

  return (a) => {
    return (b) => {
      countOfCall++;

      if (countOfCall > countOfCallWithoutError
        && countOfCall % 2 === 0) {
        return errorMessage;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
