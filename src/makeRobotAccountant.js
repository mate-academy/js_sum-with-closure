'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorMessage = 'Bzzz... Error!';
  let count = 0;

  const robot = (a) => {
    count++;

    return count > 3 && count % 2 === 0
      ? (b) => {
        return errorMessage;
      }
      : (b) => {
        return a + b;
      };
  };

  return robot;
}

module.exports = makeRobotAccountant;
