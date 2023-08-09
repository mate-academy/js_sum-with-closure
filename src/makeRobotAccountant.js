'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countIteration = 1;

  return a => {
    return b => {
      if (countIteration > 3 && countIteration % 2 === 0) {
        countIteration++;

        return 'Bzzz... Error!';
      }
      countIteration++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
