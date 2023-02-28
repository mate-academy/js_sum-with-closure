'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (robotAccountant1) => {
    return (robotAccountant2) => {
      counter++;

      return counter > 3 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : robotAccountant1 + robotAccountant2;
    };
  };
};

module.exports = makeRobotAccountant;
