'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let cashCount = 1;

  return (a) => (b) => {
    if (cashCount % 2 === 0 && cashCount !== 2) {
      ++cashCount;

      return 'Bzzz... Error!';
    } else {
      ++cashCount;

      return a + b;
    }
  };
}

module.exports = makeRobotAccountant;
