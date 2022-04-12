'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const errorMessage = 'Bzzz... Error!';

  return (x) => {
    return (y) => {
      counter++;

      const isEven = (counter % 2 === 0);

      return (isEven && counter >= 3) ? errorMessage : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
