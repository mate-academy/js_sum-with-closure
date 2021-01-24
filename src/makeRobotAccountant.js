'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let count = 0;

  return (firstValue) => {
    count++;

    return (secondValue) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
