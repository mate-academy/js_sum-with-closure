'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (number) => {
    counter++;

    return counter > 3 && counter % 2 === 0
      ? () => 'Bzzz... Error!'
      : secondNumber => number + secondNumber;
  };
}

module.exports = makeRobotAccountant;
