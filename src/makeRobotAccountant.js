'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let error = false;

  return (a) => {
    return (b) => {
      if (counter >= 3) {
        error = !error;
      } else {
        counter++;
      }

      if (error) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
