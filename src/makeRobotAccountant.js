'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const USAGE_LIMIT = 3;
  let usageCount = 0;
  const errorMassage = 'Bzzz... Error!';

  return (num1) => {
    usageCount++;

    const isBroken = usageCount > USAGE_LIMIT && usageCount % 2 === 0;

    return (num2) => isBroken ? errorMassage : num1 + num2;
  };
}

module.exports = makeRobotAccountant;
