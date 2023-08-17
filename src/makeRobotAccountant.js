'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const EROR_MESSAGE = 'Bzzz... Error!';
  const MAX_CORRECT_COUNT_CALL = 3;
  const IS_EVEN_CALL = (count) => count % 2 === 0;
  const IS_GRETTER_THEN_MAX_CORRECT_COUNT_CALL = (count) => (
    count > MAX_CORRECT_COUNT_CALL);

  return (x) => {
    callCount++;

    return (y) => IS_EVEN_CALL(callCount)
    && IS_GRETTER_THEN_MAX_CORRECT_COUNT_CALL(callCount)
      ? EROR_MESSAGE
      : x + y;
  };
}

module.exports = makeRobotAccountant;
