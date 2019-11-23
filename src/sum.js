'use strict';

/**
 * Implement sum function:
 *
 * Function works with next pattern: sum(a)(b) === a + b. Double braces is not a
 * mistake. The implementation requires solution with closures.
 *
 * sum(1)(2) === 3
 * sum(2)(11) === 13
 * sum(5)(-5) === 0
 * sum(-10)(-1) === -11
 *
 * @param {number} a
 *
 * @return {function}
 */
function sum(a) {
  return b => a + b;
}

module.exports = sum;
