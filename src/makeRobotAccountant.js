'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return first => {
    return second => {
      counter++;

      if (counter >= 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return first + second;
      }
    };
  };
}

module.exports = makeRobotAccountant;
