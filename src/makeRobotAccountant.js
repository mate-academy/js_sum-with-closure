'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;
  const callsLimit = 3;

  return (x) => {
    return (y) => {
      ++callsCount;

      if (callsCount % 2 === 0 && callsCount > callsLimit) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
