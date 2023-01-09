'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(numb1) {
    return function(numb2) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return Number(numb1 + numb2);
      }
    };
  };
}

module.exports = makeRobotAccountant;
