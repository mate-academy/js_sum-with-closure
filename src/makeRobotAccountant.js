'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNum) => {
    return (secondNum) => {
      if (count < 3) {
        count++;

        return firstNum + secondNum;
      } else if (count % 2 === 0) {
        count++;

        return firstNum + secondNum;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
