'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (first) => {
    return (second) => {
      counter++;

      if (counter > 3 && counter % 2 !== 1) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };
  };
}

module.exports = makeRobotAccountant;
