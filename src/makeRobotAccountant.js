'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstArg) => {
    return (secondArg) => {
      count++;

      if (count > 2 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstArg + secondArg;
    };
  };
}

module.exports = makeRobotAccountant;
