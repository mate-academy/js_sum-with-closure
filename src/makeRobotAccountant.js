'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let canWork = 3;

  return first => second => {
    if (canWork > 0) {
      canWork--;

      return first + second;
    } else {
      canWork++;

      return 'Bzzz... Error!';
    }
  };
}

module.exports = makeRobotAccountant;
