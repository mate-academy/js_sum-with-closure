'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (x) => (y) => {
    counter++;

    if (counter > 3 && counter % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };
}

module.exports = makeRobotAccountant;
