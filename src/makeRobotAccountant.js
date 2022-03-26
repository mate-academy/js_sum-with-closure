'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let caunt = 0;

  return (x) => {
    caunt += 1;

    return (y) => {
      if (caunt > 3 && caunt % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
