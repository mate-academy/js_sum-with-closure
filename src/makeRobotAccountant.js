'use strict';

/*
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterations = 0;

  return (elementA) => {
    return (elementB) => {
      const addition = elementA + elementB;

      iterations++;

      if (iterations < 3) {
        return addition;
      }

      return (iterations) % 2 === 0 ? 'Bzzz... Error!' : addition;
    };
  };
}

module.exports = makeRobotAccountant;
