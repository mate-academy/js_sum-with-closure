'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  return (firstNnumber) => {
    return (secondNnumber) => {
      numberOfCalls++;

      if (numberOfCalls > 3 && numberOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNnumber + secondNnumber;
    };
  };
}

module.exports = makeRobotAccountant;
