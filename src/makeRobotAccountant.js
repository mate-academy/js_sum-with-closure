'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (numberFirst) => (numberSecond) => {
    counter++;

    if (counter <= 3 || counter % 2 !== 0) {
      return numberFirst + numberSecond;
    } else {
      return 'Bzzz... Error!';
    }
  };
}

module.exports = makeRobotAccountant;
