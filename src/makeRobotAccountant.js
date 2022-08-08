'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  const errMessage = `Bzzz... Error!`;
  let count = 0;

  const sumFun = (a) => {
    count++;

    return function(b) {
      if (count >= 4 && count % 2 === 0) {
        return errMessage;
      }

      return a + b;
    };
  };

  return sumFun;
}

module.exports = makeRobotAccountant;
