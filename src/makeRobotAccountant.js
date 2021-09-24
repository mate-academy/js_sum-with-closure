'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(term1) {
    count++;

    return function(term2) {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return term1 + term2;
      };
    };
  };
};

module.exports = makeRobotAccountant;
