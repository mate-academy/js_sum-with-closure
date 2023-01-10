'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (numberOne) => {
    counter++;

    return (numbertwo) => {
      const sum = numberOne + numbertwo;

      return counter > 3 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : sum;
    };
  };
}

module.exports = makeRobotAccountant;
