'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callsCount = 0;
  const limit = 3;

  const getSum = (firstTerm) => {
    return (secondTerm) => {
      callsCount++;

      if (callsCount % 2 === 0 && limit < callsCount) {
        return 'Bzzz... Error!';
      };

      return firstTerm + secondTerm;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
