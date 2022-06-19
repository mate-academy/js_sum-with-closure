'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function addToNumber(x) {
    count++;

    const error = `Bzzz... Error!`;

    return (y) => count < 4 || count % 2 !== 0 ? x + y : error;
  }

  return addToNumber;
}

module.exports = makeRobotAccountant;
