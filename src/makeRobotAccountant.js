'use strict';

/**
 *
 * @return {function}
 */

// const arr = [];

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    count++;

    return (b) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
};

module.exports = makeRobotAccountant;
