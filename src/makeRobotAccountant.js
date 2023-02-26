'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const robotError = () => 'Bzzz... Error!';

  const makeSum = (firstElement) => {
    counter++;

    if (counter > 3 && counter % 2 === 0) {
      return robotError;
    }

    return (secondElement) => firstElement + secondElement;
  };

  return makeSum;
}

module.exports = makeRobotAccountant;
