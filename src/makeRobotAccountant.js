'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  return (firstArg) => {
    return (secondArg) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      }

      return firstArg + secondArg;
    };
  };
}

module.exports = makeRobotAccountant;
