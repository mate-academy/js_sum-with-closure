'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const isError = (currentRun, errorsAfter = 3) =>
    currentRun > errorsAfter && currentRun % 2 === 0;
  let runsCount = 0;

  return (x) => (y) => {
    runsCount++;

    if (isError(runsCount)) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };
}

module.exports = makeRobotAccountant;
