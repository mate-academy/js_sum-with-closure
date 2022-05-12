'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return firstCall => {
    counter++;

    return secondCall => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstCall + secondCall;
    };
  };
}

module.exports = makeRobotAccountant;
