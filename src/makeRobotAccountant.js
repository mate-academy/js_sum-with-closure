'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 1;

  return (numOne) => {
    return (numTwo) => {
      if (count % 2 === 0 && count > 3) {
        count++;

        return 'Bzzz... Error!';
      }

      count++;

      return numOne + numTwo;
    };
  };
}

module.exports = makeRobotAccountant;
