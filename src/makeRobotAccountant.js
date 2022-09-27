'use strict';

/**
 *
 * @return {function}
 */

//  Відтворіть поведінку наших роботів.
//  Створіть функцію `makeRobotAccountant`, результатом якої є функція,
//  що працює за шаблоном `getSum (4) (5) === 9`.
//  Перші 3 виклики цієї функції працюють нормально.
//  Потім усі парні виклики повертають рядок `Bzzz... Error!`,
//  а непарні виклики повертають правильне значення.

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (value1) => {
    count++;

    return (value2) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return value1 + value2;
    };
  };
}

module.exports = makeRobotAccountant;
