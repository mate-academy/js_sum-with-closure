'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = -1;

  return (a) => {
    return (b) => {
      counter++;

      if (counter < 3 || (counter % 2 === 0 && counter > 3)) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
