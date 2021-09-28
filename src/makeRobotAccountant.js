'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccounterant() {
  let counter = 0;

  return (n1) => {
    return (n2) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return n1 + n2;
    };
  };
}

module.exports = makeRobotAccounterant;
