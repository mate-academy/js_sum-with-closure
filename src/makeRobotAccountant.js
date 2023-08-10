'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let robotAccountantCreated = 0;

  return (number1 = 0) =>
    (number2 = 0) => {
      robotAccountantCreated++;

      return (robotAccountantCreated > 3 && robotAccountantCreated % 2 === 0)
        ? 'Bzzz... Error!'
        : number1 + number2;
    };
}

module.exports = makeRobotAccountant;
