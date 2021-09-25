'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attempt = 1;

  const robotAccountant = (firstNum) => (secondNum) => {
    if (attempt > 3 && attempt % 2 === 0) {
      attempt++;

      return 'Bzzz... Error!';
    } else {
      attempt++;

      return firstNum + secondNum;
    }
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
