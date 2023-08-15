'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const errorMessage = 'Bzzz... Error!';

  return (firstArg) => {
    return (secondArg) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return errorMessage;
      }

      return firstArg + secondArg;
    };
  };
}

module.exports = makeRobotAccountant;
