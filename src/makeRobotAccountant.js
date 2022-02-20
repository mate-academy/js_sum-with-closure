'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (value1) => (value2) => {
    count++;

    const isPair = count % 2 === 0;

    const result = count > 3 && isPair
      ? 'Bzzz... Error!'
      : value1 + value2;

    return result;
  };
}

module.exports = makeRobotAccountant;
