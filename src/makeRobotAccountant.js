'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(firstVariable) {
  let count = 0;

  return (secondVariable) => {
    const result = firstVariable + secondVariable;

    count++;

    return (count > 3 && count % 2 !== 0) ? result : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
