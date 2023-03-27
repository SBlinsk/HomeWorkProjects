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
