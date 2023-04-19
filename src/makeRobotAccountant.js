'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let count = 0;
  const MaxCalls = 3;

  return (x) => {
    count++;

    return (y) => {
      if (count > MaxCalls && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
