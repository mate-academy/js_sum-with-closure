'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let invocationsCounter = 0;
  const successfulInvocationsLimit = 3;

  return (firstDigit) => {
    return (secondDigit) => {
      invocationsCounter++;

      if (invocationsCounter <= successfulInvocationsLimit
        || invocationsCounter % 2 !== 0) {
        return firstDigit + secondDigit;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
