'use strict';

function makeRobotAccountant() {
  // counter
  let c = 0;

  return a => b => {
    c++;

    return (c > 3 && c % 2 === 0)
      ? 'Bzzz... Error!'
      : a + b;
  };
}

module.exports = makeRobotAccountant;
