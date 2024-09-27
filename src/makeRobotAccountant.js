'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (firstTerm) => {
    return (secondTerm) => {
      callCounter++;

      if (callCounter > 3 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstTerm + secondTerm;
    };
  };
}

module.exports = makeRobotAccountant;
