'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return firstNum => {
    return secondNum => {
      const sum = firstNum + secondNum;

      counter++;

      if (counter % 2 === 0 && counter > 2) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
