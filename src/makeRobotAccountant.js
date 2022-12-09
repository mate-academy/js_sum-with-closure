'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countForError = 0;

  return (a) => (b) => {
  	countForError++;

    if (countForError > 3 && countForError % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return a + b;
  };
}

module.exports = makeRobotAccountant;
