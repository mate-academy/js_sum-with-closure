'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (innerValue) => {
    count++;

    return (innerValue2) =>
      (count >= 3 && count % 2 === 0)
        ? 'Bzzz... Error!'
        : innerValue + innerValue2;
  };
}

module.exports = makeRobotAccountant;
