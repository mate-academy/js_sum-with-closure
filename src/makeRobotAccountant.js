'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numOfCall = 0;

  return (a) => {
    numOfCall++;

    return (b) => (
      numOfCall <= 3 || numOfCall % 2 !== 0
        ? a + b
        : 'Bzzz... Error!'
    );
  };
}

module.exports = makeRobotAccountant;
