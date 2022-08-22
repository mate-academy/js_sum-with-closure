'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (numberOne) => {
    return (numberTwo) => {
      counter++;

      return (counter >= 3 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : numberOne + numberTwo);
    };
  };
}

module.exports = makeRobotAccountant;
