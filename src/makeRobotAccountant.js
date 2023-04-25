'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countAttempt = 0;

  return (a) => {
    return (b) => {
      countAttempt++;

      if (countAttempt <= 3 || countAttempt % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
