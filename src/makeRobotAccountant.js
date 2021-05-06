'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (firstNum) => {
    calls++;

    return (secondNum) => {
      if (calls > 3 && calls % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNum + secondNum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
