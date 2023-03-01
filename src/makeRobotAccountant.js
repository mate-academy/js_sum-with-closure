'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (application1) => {
    const addition = (application2) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return application1 + application2;
    };

    return addition;
  };

  return sum;
}

module.exports = makeRobotAccountant;
