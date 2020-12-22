'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(first) {
    return function(second) {
      if (counter >= 3 && counter % 2 > 0) {
        counter++;

        return 'Bzzz... Error!';
      } else {
        counter++;

        return first + second;
      }
    };
  };
}

module.exports = makeRobotAccountant;
