'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const addNumber = function(a) {
    counter++;

    return (b) => (counter < 4 || counter % 2)
      ? a + b
      : 'Bzzz... Error!';
  };

  return addNumber;
}

module.exports = makeRobotAccountant;
