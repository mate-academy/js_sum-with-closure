'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (numOne) => {
    count++;

    return (numTwo) => {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return numOne + numTwo;
    };
  };
}

module.exports = makeRobotAccountant;
