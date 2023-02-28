'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let itterations = 0;

  return function(x) {
    itterations++;

    const isEvenItteration = itterations > 3 && itterations % 2 === 0;

    return function(y) {
      return (
        isEvenItteration
          ? `Bzzz... Error!`
          : x + y
      );
    };
  };
}

module.exports = makeRobotAccountant;
