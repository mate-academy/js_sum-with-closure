'use strict';

/**
 *
 * @return {function}
 */
const ERROR_MESSAGE = 'Bzzz... Error!';
const USAGE_LIMIT = 3;

function makeRobotAccountant() {
  let count = 0;

  return a => {
    count++;

    const isUsageOverLimit = count > USAGE_LIMIT;
    const isUsageCountEven = count % 2 === 0;
    const isError = isUsageOverLimit && isUsageCountEven;

    return b => isError
      ? ERROR_MESSAGE
      : a + b;
  };
}

module.exports = makeRobotAccountant;
