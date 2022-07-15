'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNum) => {
    return function(secondNum) {
      count++;

      return (count <= 3 || (count % 2))
        ? firstNum + secondNum
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
