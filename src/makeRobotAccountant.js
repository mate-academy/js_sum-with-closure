'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;
  const resFunc = (a) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    } else {
      return (b) => a + b;
    }
  };

  return resFunc;
}

module.exports = makeRobotAccountant;
