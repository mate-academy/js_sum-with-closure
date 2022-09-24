'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCalls = 0;

  const addNumber = function(num1) {
    functionCalls++;

    return (num2) => (functionCalls < 4 || functionCalls % 2)
      ? num1 + num2
      : 'Bzzz... Error!';
  };

  return addNumber;
}

module.exports = makeRobotAccountant;
