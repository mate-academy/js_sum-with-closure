'use strict';

/**
 *
 * @return {function}
 */

 function makeRobotAccountant() {
  let counter = 0;

  return (x) => {
    return (y) => {
      const result = x + y;
      counter++;
      if(counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }
      return result;
    }
  }
}

module.exports = makeRobotAccountant;
