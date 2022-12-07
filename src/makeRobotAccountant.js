'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counterOfCall = 1;

  return (firstNum) => {
    return (secondNum) => {
      counterOfCall++;

      const afterThirdCall = (counterOfCall > 3 && counterOfCall % 2 === 0);

      if (counterOfCall <= 3 || afterThirdCall) {
        return firstNum + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
