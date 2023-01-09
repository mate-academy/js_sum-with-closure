'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;
  const limit = 3;

  return (firstNum) => (secondNum) => {
    if (count <= limit || count % 2 !== 0) {
      count++;

      return firstNum + secondNum;
    } else {
      count++;

      return 'Bzzz... Error!';
    }
  };
}

module.exports = makeRobotAccountant;
