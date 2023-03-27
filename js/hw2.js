"use strict";

//ЧАСТЬ 2
// 2. Написать функцию, которая принимает один параметр. При первом вызове, она его
// запоминает, при втором - суммирует переданный параметр с тем, что передали
// первый раз и так далее. Всё это с замыканиями. Например:
// a. sum(3) = 3
// b. sum(5) = 8
// c. sum(20) = 28

function count(parameter) {
  let a = 0;
  return function () {
    a += parameter;
    return a;
  };
}
let b = count(1);

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

// Реализовать наследования следующей цепочки:
// Животное -> Млекопитающее -> Енот
// Между этими прослойками можно создать еще несколько своих. Прототип животного
// должен иметь 2 метода передвижения (прыжок и бег) и свойство пол. Прототип
// млекопитающего должен иметь метод, который, в зависимости от пола дает молоко.
// Прототип енота должен уметь воровать =)
// function Unit(type, health, maxHealth, maxDistance) {
//   this.type = type;
//   this.health = health;
//   this.maxHealth = maxHealth;
//   this.maxDistance = maxDistance;
// }

function Animal(sex) {
  this.sex = sex;
}
Animal.prototype.jump = function () {
  console.log("JUMP");
};
Animal.prototype.run -
  function () {
    return console.log("run");
  };

function Mammal() {}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.milk = function () {
  if (this.sex === "male") {
    return false;
  } else {
    return true;
  }
};

function Racoon() {}
Racoon.prototype = Object.create(Mammal.prototype);
Racoon.prototype.steal = function () {
  return console.log("ya spizdel ety hyiny!!");
};


