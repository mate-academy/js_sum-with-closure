'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const connect = (x) => (y) => {
    count++;

    if ((count > 3) && (count % 2 === 0)) {
      return 'Bzzz... Error!';
    } else {
      return x + y;
    }
  };

  return connect;
};

module.exports = makeRobotAccountant;
