'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const result = (a) => {
    return (b) => {
      count++;
      if (count <= 3 || count % 2 !== 0) {
  
        return a + b;
      }
      
      return 'Bzzz... Error!';
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
