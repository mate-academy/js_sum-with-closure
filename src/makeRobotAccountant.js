'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const myFun = (a) => {
    return (b) => {
      if (count === 3) {
        count = 0;

        return 'Bzzz... Error!';
      }

      count++;

      return a + b;
    };
  };

  return myFun;
}

module.exports = makeRobotAccountant;
