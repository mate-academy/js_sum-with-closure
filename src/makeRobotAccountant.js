'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (firstValue) => (secondValue) => {
    counter++;

    return (counter > 3 && counter % 2)
      ? 'Bzzz... Error!'
      : firstValue + secondValue;
  };
}

module.exports = makeRobotAccountant;
