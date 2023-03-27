"use strict";
// Объекты. Конструкторы. Символы
// 1. Написать функцию copy(target, origin), которая копирует свойства из объекта origin
// в объект target и возвращает объект со всеми свойствами. В данном задании
// // используйте for ... in для работы со свойствами объектов.
// // 2. Напишите функцию, принимающую и сравнивающую два объекта. Если объекты
// // содержат одинаковые ключи и значения, то функция возвращает true, если нет -
// // false. Функция должна учитывать, что количество свойств в двух объектах может
// // отличаться.
// // 3. Написать функцию, которая принимает строку и возвращает данные о том, сколько
// // раз встречается каждая буква. Например, если передали строку “aaabbc”, то
// // функция должна сообщить, что буква “a” встретилась 3 раза, буква “b” встретилась
// // 2 раза, а буква “c” - 1 раз. Функция не должна использовать console.log, а должна
// // вернуть объект с данными

// function copy(target, origin) {
//   for (let key in origin) {
//     target[key] = origin[key];
//   }
// }

// //2
// function deepEqual(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// //3
// function howMuchLetter(str) {
//   let result = {};
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     result[arr[i]] = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         result[arr[i]]++;
//       }
//     }
//   }
//   return result;
// }

// //Методы у примитивов
// // 1. Написать функцию isSymbolPresentInString(str,symbol) - возвращает true если
// // символ найден в строке и false если нет.
// // a. isSymbolPresentInString("abc","a") // true
// // b. isSymbolPresentInString("abc","e") // false

// function isSymbolPresents(str, symbol) {
//   if (str.indexOf(symbol) >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // 2. Написать функцию getSymbolIndex(str,symbol) - возвращает индекс первого
// // найденного символа в строке, или -1 если символ не найден
// // a. getSymbolIndex("hello lol","h") // 0
// // b. getSymbolIndex("hello lol","l") // 2
// // c. getSymbolIndex("hello lol","v") // -1
// // 3. Написать функцию getNumberOfEven(n) - получить количество четных цифр в
// // числе
// // a. getNumberOfEven(223344) // 4
// // b. getNumberOfEven(111) // 0

// function getSymbolIndex(str, symbol) {
//   return str.indexOf(symbol);
// }
// console.log(getSymbolIndex("hello lol", "l"));

// // 3. Написать функцию getNumberOfEven(n) - получить количество четных цифр в
// // числе
// // a. getNumberOfEven(223344) // 4
// // b. getNumberOfEven(111) // 0

// function getNumberOfEven(n) {
//   const str = n.toString();
//   let qty = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (+str[i] % 2 === 0) {
//       qty += 1;
//     }
//   }
//   return qty;
// }
// console.log(getNumberOfEven(5513));

// // Массивы
// // Написать собственную реализацию функций forEach, map, filter, some, every. Каждая
// // функция должна принимать два аргумента - массив и callback. Все функции, кроме
// // forEach, должны вернуть результат.

// //forEach
// function myForEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// // //map
// function myMap(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = callback(arr[i], i, arr);
//   }
//   return newArr;
// }

// // //filter
// function myFilter(arr, callback) {
//   let filterArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       filterArr.push(arr[i]);
//     }
//   }
//   return myFilter;
// }

// // //some
// function mySome(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       return true;
//     }
// //   }
//   return false;
// }

// // //every

// function every(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!callback(arr[i], i, arr)) {
//       return false;
//     }
//   }
//   return true;
// }

// Продвинутая работа с функциями
// 1. Написать функцию “глубокого” копирования. Функция принимает один параметр и
// возвращает его копию “по значению”. В функцию можно передать параметр любого
// типа.
// a. Если передали объект, то предусмотреть ситуацию, когда свойствами этого
// объекта будут объекты или массивы.
// b. Если передали массив, то предусмотреть ситуацию, когда элементами этого
// массива будут объекты или массивы.

// function copyEverything(parameter) {
//   let result;
//   if (parameter === null || !parameter || typeof parameter !== "object") {
//     result = parameter;
//     return result;
//   }

//   const newObj = Array.isArray(parameter) ? [] : {};
//   for (const key in parameter) {
//     newObj[key] = copyEverything(parameter[key]);
//   }
//   result = newObj;
//   return result;
// }

//ЧАСТЬ 2
// 2. Написать функцию, которая принимает один параметр. При первом вызове, она его
// запоминает, при втором - суммирует переданный параметр с тем, что передали
// первый раз и так далее. Всё это с замыканиями. Например:
// a. sum(3) = 3
// b. sum(5) = 8
// c. sum(20) = 28

function count(parameter) {
  let a = 0;
  return function() {
    a += parameter;
    return a;
  };

}
let b=count(1);


// Реализовать все методы прототипов по ссылке:
// https://gist.github.com/dkhovrich/3f59a8969ae1cb93b34b327502f009b8
// Юнит - один солдат армии. При создании получает тип, показатель текущего здоровье,
// максимально возможное здоровье и дистанцию, на которую способен переместиться.
function Unit(type, health, maxHealth, maxDistance) {
  this.type = type;
  this.health = health;
  this.maxHealth = maxHealth;
  this.maxDistance = maxDistance;
}
// ● isReadyToMove - функция принимает один параметр - дистанцию, которую нужно
// пройти юниту. Функция должна проверить способен ли юнит пройти указанную
// дистанцию.
Unit.prototype.isReadyToMove = function (distance) {
  if (this.maxDistance - distance < 0) {
    return false;
  } else {
    return true;
  }
};
// ● isReadyToFight - функция, проверяющая способен ли юнит сражаться. Юнит
// способен сражаться если его текущее здоровье составляет хотя бы половину от
// максимально возможного.
Unit.prototype.isReadyToFight = function () {
  return this.health > this.maxHealth / 2;
};
//● restore - функция, которая проверяет был ли ранен юнит. Если был, то
// восстанавливает здоровье до максимального.
Unit.prototype.restore = function () {
  if (this.health < this.maxHealth) {
    this.health = this.maxHealth;
  }
  return this.health;
};
// ● clone - функция возвращает копию юнита.
Unit.prototype.clone = function () {
  let newClone = new Unit(
    this.type,
    this.health,
    this.maxHealth,
    this.maxDistance
  );
  return newClone;
};
// Армия - набор юнитов. При создании получает опциональный параметр - массив юнитов.
// Если его передали, то все юниты добавляются к уже существующим в армии.
function Army(units) {
  this.units = units || [];
}

// ● isReadyToMove - функция принимает один параметр - дистанцию, которую нужно
// проти армии. Армия способна пройти дистанцию если все юниты способны пройти
// дистанцию.
Army.prototype.isReadyToMove = function () {
  for (let i = 0; i < this.units.length; i++) {
    if (this.units[i].isReadyToMove !== true) {
      return false;
    }
    return true;
  }
};
// ● isReadyToFight - функция, проверяющая способна ли армия сражаться. Армия
// способна сражаться если все юниты способны сражаться.
Army.prototype.isReadyToFight = function () {
  for (let i = 0; i < this.units.length; i++) {
    if (this.units[i].isReadyToFight !== true) {
      return false;
    }
    return true;
  }
};
// ● restore - проверка здоровья всех юнитов. Функция восстанавливает здоровье всех
// раненых юнитов.
Army.prototype.restore = function () {
  this.units.forEach(function (unit) {
    unit.resrore();
  });
};
// ● getReadyToMoveUnits - функция принимает один параметр - дистанцию, которую
// нужно проти армии. Возвращает массив юнитов, которые способны пройти эту
// дистанцию.
Army.prototype.getReadyToMoveUnits = function (distance) {
  let listOfUnits = [];
  this.units.forEach(function (unit) {
    if (unit.isReadyToMove(distance)) {
      listOfUnits.push(unit);
    }
  });
  return listOfUnits;
};
// ● combineUnits - функция принимает массив юнитов как параметр. Добавляет всех
// юнитов из этого массива к массиву собственных юнитов.

Army.prototypr.combineUnits = function (arr) {
  this.units = this.units.concat(arr);
};
// ● cloneUnit - принимает порядковый номер юнита, которого нужно скопировать.
// Возвращает копию юнита.
Army.prototype.cloneUnit = function (n) {
const copyUnit = this.units[n];
return copyUnit;
}; 
