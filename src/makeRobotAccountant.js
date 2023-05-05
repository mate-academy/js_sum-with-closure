'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  const robotAccountant = (number1) => {
    return (number2) => {
      numberOfCalls++;

      if (numberOfCalls < 3 || numberOfCalls % 2 !== 0) {
        return number1 + number2;
      }

      return 'Bzzz... Error!';
    };
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
