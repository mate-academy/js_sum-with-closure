'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robotAccounter = (a) => {
    function accounter(b) {
      count++;

      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };

    return accounter;
  };

  return robotAccounter;
}

module.exports = makeRobotAccountant;
