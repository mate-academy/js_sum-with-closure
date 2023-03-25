'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (fisrtNumber) => {
    return (secondNum) => {
      if (count > 2 && count % 2 === 1) {
        count++;

        return 'Bzzz... Error!';
      } else if (count > 2 && count % 2 === 0) {
        count++;

        return fisrtNumber + secondNum;
      }

      count++;

      return fisrtNumber + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
