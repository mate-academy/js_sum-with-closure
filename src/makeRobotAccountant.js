'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return firstSummand =>
    secondSummand => {
      callCounter++;

      return callCounter < 3 || callCounter % 2 === 1
        ? firstSummand + secondSummand
        : `Bzzz... Error!`;
    };
}

module.exports = makeRobotAccountant;
