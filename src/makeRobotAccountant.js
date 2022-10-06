'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robot = value => {
    count++;

    const sum = secondValue => {
      return (count > 3 && count % 2 === 0)
        ? 'Bzzz... Error!'
        : value + secondValue;
    };

    return sum;
  };

  return robot;
}

module.exports = makeRobotAccountant;
