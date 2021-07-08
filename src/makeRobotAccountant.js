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

        if ((iterations - 1) % 2 !== 0) {
          return 'Bzzz... Error!';
        } else {
          return aaddition;
        }
      }
    };
  };
}

module.exports = makeRobotAccountant;
