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

      iterations++;

      if (iterations < 3) {
        return aaddition;
      } else {
        return (iterations) % 2 === 0 ? 'Bzzz... Error!' : aaddition;
      }
    };
  };
}

module.exports = makeRobotAccountant;
