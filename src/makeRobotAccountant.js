'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (a) => {
    counter++;

    return (b) => {
      if (counter <= 3) {
        return a + b;
      } else {
        return counter % 2 === 0 ? `Bzzz... Error!` : a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
