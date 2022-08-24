'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstDigit) => {
    count++;

    return (secondDigit) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstDigit + secondDigit;
      }
    };
  };
}

module.exports = makeRobotAccountant;
