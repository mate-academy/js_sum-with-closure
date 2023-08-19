'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attempts = 0;
  const ERROR_MESSAGE = 'Bzzz... Error!';

  return a => b => {
    attempts++;

    if (attempts > 3 && attempts % 2 === 0) {
      return ERROR_MESSAGE;
    }

    return a + b;
  };
}

module.exports = makeRobotAccountant;
