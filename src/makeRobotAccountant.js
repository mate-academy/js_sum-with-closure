'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (firstNum) => (secondNum) => {
    count++;

    if (count <= 3 || count % 2 === 1) {
      return firstNum + secondNum;
    }

    return 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
