'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const CAN_HANDLE = 3;
  let executionCount = 0;

  const timeToGlitch = () =>
    executionCount > CAN_HANDLE && executionCount % 2 === 0;

  function account(bucksFromUncle) {
    executionCount++;

    return (bucksFromAunt) => {
      if (timeToGlitch()) {
        return 'Bzzz... Error!';
      }

      const myBucks = bucksFromUncle + bucksFromAunt;

      return myBucks;
    };
  }

  return account;
}

module.exports = makeRobotAccountant;
