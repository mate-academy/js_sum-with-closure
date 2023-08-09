'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const ERROR_MESSAGE = 'Bzzz... Error!';
  let countIteration = 0;

  return a => b => {
    countIteration++;

    if (countIteration > 3 && countIteration % 2 === 0) {
      return ERROR_MESSAGE;
    }

    return a + b;
  };
}

module.exports = makeRobotAccountant;
