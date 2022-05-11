'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = -1;

  return (firstArg) => {
    counter++;

    return (secArg) => {
      if (counter < 3) {
        return firstArg + secArg;
      }

      if (counter % 2 === 0) {
        return firstArg + secArg;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
