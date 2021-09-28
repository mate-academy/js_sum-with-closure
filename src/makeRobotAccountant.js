'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const result = (a) => {
    count++;

    return (b) => {
      return (count > 3 && count % 2 === 0)
        ? 'Bzzz... Error!'
        : a + b;
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
