'use strict';

/**
 *
 * @return {function}
 */
const STABLE_COUNT = 3;
const UNSTABLE_STEP = 2;

function makeRobotAccountant() {
  let count = 0;

  return function(firstOperand) {
    return function(secondOperand) {
      count++;

      if (count > STABLE_COUNT && count % UNSTABLE_STEP === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstOperand + secondOperand;
      }
    };
  };
}

module.exports = makeRobotAccountant;
