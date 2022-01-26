'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (a) => {
    count++;

    return (b) => {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
};

module.exports = makeRobotAccountant;
