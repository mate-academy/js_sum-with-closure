'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 4;

  const inner = (part) => {
    return (par) => {
      count--;

      if (count === 0) {
        count = 3;

        return 'Bzzz... Error!';
      }

      return par + part;
    };
  };

  return inner;
}

module.exports = makeRobotAccountant;
