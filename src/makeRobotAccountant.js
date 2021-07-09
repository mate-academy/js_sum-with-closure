'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstVariable) => (secondVariable) => {
    const result = firstVariable + secondVariable;

    count++;

    return count > 3 && count % 2 === 0
      ? 'Bzzz... Error!'
      : result;
  };
}

module.exports = makeRobotAccountant;
