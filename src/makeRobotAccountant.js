'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstArg) => {
    return (secondArg) => {
      counter++;

      if (counter > 3 && (counter % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return firstArg + secondArg;
    };
  };
}

module.exports = makeRobotAccountant;
