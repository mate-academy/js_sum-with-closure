'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let accCounter = 0;

  return (firstValue) => {
    return (secondValue) => {
      return (accCounter > 2 && accCounter % 2 !== 0)
        ? (
          accCounter++,
          'Bzzz... Error!'
        ) : (
          accCounter++,
          firstValue + secondValue
        );
    };
  };
}

module.exports = makeRobotAccountant;
