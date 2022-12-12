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
      if (counter <= 3 || counter % 2 === 1) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
};

module.exports = makeRobotAccountant;
