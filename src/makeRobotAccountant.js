'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstLounchNum) => {
    return (secondLounchNum) => {
      count += 1;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstLounchNum + secondLounchNum;
    };
  };
}

module.exports = makeRobotAccountant;
