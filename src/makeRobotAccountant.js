'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(x) {
    count++;

    const isBroke = count > 3 && count % 2 === 0;

    return (y) =>
      isBroke ? `Bzzz... Error!` : x + y;
  };

  return sum;
}

module.exports = makeRobotAccountant;
