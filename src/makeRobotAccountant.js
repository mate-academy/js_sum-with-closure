'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const getSum = (number) => {
    return (number2) => {
      callCount++;
      if(callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number + number2;
    }
  }

  return getSum;
}

module.exports = makeRobotAccountant;
