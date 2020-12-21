'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let numberOfCalls = 0;

  return (num1) => {
    numberOfCalls++;

    return (num2) => {
      if (numberOfCalls < 3 || numberOfCalls % 2) {
        return num1 + num2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
