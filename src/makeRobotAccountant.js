'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (fisrtNumber) => {
    return (secondNum) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return fisrtNumber + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
