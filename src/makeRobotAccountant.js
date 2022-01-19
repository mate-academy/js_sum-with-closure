'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let att = 3;

  for (let i = 0; i < att; i++) {
    const run = (a) => {
      return function(b) {
        if (att === 0) {
          att++;

          return 'Bzzz... Error!';
        }

        att--;

        return a + b;
      };
    };

    return run;
  }
}

module.exports = makeRobotAccountant;
