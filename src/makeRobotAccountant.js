'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstVariable) => (secondVariable) => {
    const result = firstVariable + secondVariable;

    count++;

    return count < 4
      ? result
      : count % 2 !== 0
        ? result : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
