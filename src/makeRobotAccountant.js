'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (numFirst) => {
    return (numSecond) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numFirst + numSecond;
    };
  };
}

module.exports = makeRobotAccountant;
