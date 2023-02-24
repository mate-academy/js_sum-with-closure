'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNum) => {
    return (secondNum) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
