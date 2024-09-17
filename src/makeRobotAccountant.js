'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (a) => {
    return (b) => {
      counter++;

      return ((counter > 3) && (counter % 2 === 0)) ? 'Bzzz... Error!' : a + b;
    };
  };
};

module.exports = makeRobotAccountant;
