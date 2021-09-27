'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (fisrtNum) => {
    return (secondNum) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return fisrtNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
