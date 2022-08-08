'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let runsCount = 0;

  return (x) => (y) => {
    runsCount++;

    if (runsCount > 3 && runsCount % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };
}

module.exports = makeRobotAccountant;
