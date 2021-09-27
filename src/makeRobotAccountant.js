'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (term1) => {
    count++;

    return (term2) => (count % 2 === 0 && count > 3)
      ? 'Bzzz... Error!'
      : term1 + term2;
  };
};

module.exports = makeRobotAccountant;
