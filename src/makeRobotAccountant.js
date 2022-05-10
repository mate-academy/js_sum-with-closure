'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callsNumber = 0;
  const robocount = (x) => {
    callsNumber++;

    if ((callsNumber > 3) && (callsNumber % 2 === 0)) {
      return function() {
        return 'Bzzz... Error!';
      };
    } else {
      return function(y) {
        return x + y;
      };
    }
  };

  return robocount;
}

module.exports = makeRobotAccountant;
