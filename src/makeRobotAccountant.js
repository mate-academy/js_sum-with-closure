'use strict';

function makeRobotAccountant() {
  let callCount = 0;

  return (a) => {
    callCount++;

    return (b) => callCount % 2 === 0 && callCount !== 2
      ? 'Bzzz... Error!'
      : a + b;
  };
}

module.exports = makeRobotAccountant;
