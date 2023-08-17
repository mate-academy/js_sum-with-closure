'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const ERROR_MESSAGE = 'Bzzz... Error!';
  const COUNT_ITERATIONS = 3;
  let countIteration = 0;

  return (a) => {
    return (b) => {
      countIteration++;

      if (countIteration > COUNT_ITERATIONS && countIteration % 2 === 0) {
        return ERROR_MESSAGE;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
