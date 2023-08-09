'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countIteration = 0;

  return a => b => {
    countIteration++;

    if (countIteration > 3 && countIteration % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return a + b;
  };
}

module.exports = makeRobotAccountant;
