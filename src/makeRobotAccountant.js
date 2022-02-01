'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 1;

  return (x) => {
    return (y) => {
      count++;
      
      if (count > 3 && count % 2 === 0) {
        
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
