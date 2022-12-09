'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (a) => (b) => {
    counter++;

    const errorMessage = 'Bzzz... Error!';

    if (counter > 3 && counter % 2 === 0) {
      return errorMessage;
    }

    return a + b;
  };
}
module.exports = makeRobotAccountant;
