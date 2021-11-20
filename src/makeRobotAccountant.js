'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (x) => {
    return (y) => {
      callCounter++;

      switch (true) {
        case (callCounter <= 3): {
          return x + y;
        }

        case (callCounter % 2 === 0): {
          return 'Bzzz... Error!';
        }

        default: {
          return x + y;
        }
      }
    };
  };
}

module.exports = makeRobotAccountant;
