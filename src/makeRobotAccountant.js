'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (firstCall) => {
    return (secondCall) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstCall + secondCall;
    };
  };
}

module.exports = makeRobotAccountant;
