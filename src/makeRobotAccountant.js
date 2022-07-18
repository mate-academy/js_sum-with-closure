'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstTerm) => {
    return (secondTerm) => {
      counter++;

      return (counter > 3 && counter % 2 === 0)
        ? 'Bzzz... Error!'
        : firstTerm + secondTerm;
    };
  };
}

module.exports = makeRobotAccountant;
