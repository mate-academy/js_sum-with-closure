'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attempts = 0;

  return a => b => {
    attempts++;

    if (attempts > 3 && attempts % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return a + b;
  };
}

module.exports = makeRobotAccountant;
