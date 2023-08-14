'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let robotAccountantsCreated = 0;

  return number1 =>
    number2 => {
      robotAccountantsCreated++;

      const makerErrorCondition = robotAccountantsCreated > 3
        && robotAccountantsCreated % 2 === 0;

      return makerErrorCondition
        ? 'Bzzz... Error!'
        : number1 + number2;
    };
}

module.exports = makeRobotAccountant;
