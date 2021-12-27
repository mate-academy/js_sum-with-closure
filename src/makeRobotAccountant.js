'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(parametr1) {
    count++;

    return function(parametr2) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return parametr1 + parametr2;
      }
    };
  };
}

module.exports = makeRobotAccountant;
