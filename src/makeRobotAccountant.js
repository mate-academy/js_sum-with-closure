'use strict';

/*
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterations = 0;

  return (elementA) => {
    return (elementB) => {
      const aaddition = elementA + elementB;

      if (iterations < 3) {
        iterations++;

        return aaddition;
      } else {
        iterations++;

        return (iterations - 1) % 2 !== 0 ? 'Bzzz... Error!' : aaddition;
      }
    };
  };
}

module.exports = makeRobotAccountant;
