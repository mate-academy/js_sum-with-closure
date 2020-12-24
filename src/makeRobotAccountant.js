'use strict';

/**
 * Function need return function into function which have one param.
 * This function result need to be sum of params these functions if function
 * calling count is less than 3 and odd. Else return 'Bzzz... Error!'.
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    count++;

    return (b) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
