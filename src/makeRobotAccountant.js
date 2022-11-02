'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (a) => (b) => {
    callsCount++;

    return (callsCount > 3 && (callsCount % 2 === 0))
      ? 'Bzzz... Error!'
      : a + b;
  };
}

/* Maybe it is better to use this variant?
It is more readable and understandable, as for me.
Or it is bad?

function makeRobotAccountant() {
  let callsCount = 0;
  const getSum = (a) => {
    const sum = (b) => {
      callsCount++;

      return (callsCount > 3 && (callsCount % 2 === 0))
        ? 'Bzzz... Error!'
        : a + b;
    };

    return sum;
  };

  return getSum;
}
 */

module.exports = makeRobotAccountant;
