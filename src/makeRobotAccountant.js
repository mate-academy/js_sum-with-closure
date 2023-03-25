'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstArg) => {
    return (secondArg) => {
      const sum = firstArg + secondArg;

      count++;

      return (count < 4 || count % 2)
        ? sum
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
