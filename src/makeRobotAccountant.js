'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (firstSummand) => {
    return (secondSummand) => {
      callCounter++;

      return callCounter < 3 || callCounter % 2 !== 0
        ? firstSummand + secondSummand
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
