'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (x) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (y) => x + y;
  };
};

module.exports = makeRobotAccountant;
