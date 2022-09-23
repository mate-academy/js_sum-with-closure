'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (arg1) => {
    return (arg2) => {
      if (counter > 3) {
        counter--;

        return 'Bzzz... Error!';
      }

      counter++;

      return arg1 + arg2;
    };
  };
}

module.exports = makeRobotAccountant;
