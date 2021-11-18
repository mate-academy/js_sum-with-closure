'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const addNum = (a) => {
    return (b) => {
      if (count > 2 && count % 2 === 1) {
        count++;
        return `Bzzz... Error!`;
      }
      count++;
  
      return a + b;
    }
  };

  return addNum;
}

module.exports = makeRobotAccountant;
