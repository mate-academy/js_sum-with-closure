'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (firstNumber) => {
    count++;

    return (secondNumber) => {
      if (count <= 3 || count % 2 !== 0) {
        return firstNumber + secondNumber;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
