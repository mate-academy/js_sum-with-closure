'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counterOfCall = 0;

  return (firstNum) => {
    return (secondNum) => {
      counterOfCall++;

      if (counterOfCall >= 4 && counterOfCall % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
