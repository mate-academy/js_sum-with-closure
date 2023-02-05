'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let permit = 0;

  const getSum = (a) => {
    permit++;

    if (permit <= 3) {
      return (b) => a + b;
    }

    if (permit % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (b) => a + b;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
