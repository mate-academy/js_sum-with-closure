'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let activations = 0;

  return (x) => {
    activations++;

    return (y) => {
      if (activations > 3 && activations % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
