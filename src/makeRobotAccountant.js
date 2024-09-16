'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (n) => {
    return (v) => {
      counter++;

      if (counter % 2 === 0 && counter >= 4) {
        return 'Bzzz... Error!';
      };

      return n + v;
    };
  };
}

module.exports = makeRobotAccountant;
