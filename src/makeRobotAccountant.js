'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const maxCountUninterruptedWork = 3;
  let count = 0;

  return (prev) => (curr) => {
    count++;

    if (count > maxCountUninterruptedWork && count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return prev + curr;
  };
}

module.exports = makeRobotAccountant;
