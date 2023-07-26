'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  const sum = (a) => {
    return (b) {
      callsCount++;

      if (callsCount <= 3 || callsCount % 2 === 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
  
  return sum;
}

module.exports = makeRobotAccountant;
