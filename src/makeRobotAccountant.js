'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return x => {
    return y => {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
