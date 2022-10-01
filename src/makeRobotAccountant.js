'use strict';

/**
 *
 * @return {function}
 */

/*
Accounting, numbers, many numbers. Boring. The solution is to automate!
The first robot accountant came off the assembly line.
I don't know how accountants' brains don't melt,
but when our robot starts adding numbers,
it starts to burn significantly and it counts every other time.
Reproduce the behavior of our robots.
Create a function makeRobotAccountant,
the result of which is a function that works on the pattern
getSum (4) (5) === 9. The first 3 calls to this feature work fine.
Then all even calls return the string Bzzz... Error!,
And odd calls the correct value.
*/

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const getSum = (a) => {
    count++;

    if (count < 3 || count % 2 === 1) {
      return function(b) {
        return a + b;
      };
    }

    return () => 'Bzzz... Error!';
  };

  return getSum;
}
module.exports = makeRobotAccountant;
