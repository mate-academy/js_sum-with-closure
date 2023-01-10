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

      if (counter > 3) {
        return counter % 2 === 0
          ? 'Bzzz... Error!'
          : sum;
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
