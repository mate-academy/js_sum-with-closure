'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return function(firstOperand) {
    callsCount++;

    if (callsCount <= 3 || callsCount % 2 === 1) {
      return (secondOperand) => firstOperand + secondOperand;
    };

    return () => 'Bzzz... Error!';
  };
};

  let count = 0;

  return function(a) {
    return function(b) {
      count++;

      if (count <= 3 || count % 2 === 1) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
