'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const store = {};

  store.count = 0;

  const funcObj = function(x) {
    store.count++;

    if (store.count >= 4 && store.count % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (y) => x + y;
  };

  return funcObj;
}

module.exports = makeRobotAccountant;
