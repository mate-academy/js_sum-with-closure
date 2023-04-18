'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  return (num1) => {
    return (num2) => {
      numberOfCalls++;

      if ((numberOfCalls > 3) && (numberOfCalls % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
