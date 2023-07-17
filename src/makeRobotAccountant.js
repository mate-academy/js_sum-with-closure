'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 1;

  return (a) => {
    const currentCounter = counter;

    return (b) => {
      counter++;

      if (currentCounter <= 3 || currentCounter % 2 === 1) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
