'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstElem) => {
    return (secondElem) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstElem + secondElem;
    };
  };
}

module.exports = makeRobotAccountant;
