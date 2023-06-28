'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let launches = 0;

  return (a) => {
    launches++;

    return (b) => {
      if (launches > 3) {
        if (launches % 2 === 0) {
          return 'Bzzz... Error!';
        }
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
