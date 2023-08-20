'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const LIMIT = 3;
  let usageCount = 0;

  return (a) => {
    usageCount++;

    const isBroken = usageCount > LIMIT && usageCount % 2 === 0;

    return (b) => isBroken ? 'Bzzz... Error!' : a + b;
  };
}

module.exports = makeRobotAccountant;
