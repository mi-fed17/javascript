const food = {
  printBread: function(){
    console.log(this.bread);
  }
}

Taco.prototype = food;
let newTaco = new Taco(["Not meat"], "Tortilla");

function Taco(topping, bread){
  this.topping = topping;
  this.bread = bread;
  this.isNice = true;
  this.nationality = "Swedish";
}



Taco.prototype.addTopping = function(newTopping){
  this.topping.push(newTopping);
}
Taco.prototype.printBread = function(){
  console.log(this.bread);
}

Taco.prototype.removeTopping = function(){
  this.topping.pop();
}



let aNiceTaco = new Taco(["Guaca", "Not Meat"], "Tortilla");
aNiceTaco.printBread();

let anotherNiceTaco = new Taco(["Guaca", "Corn"], "Shell");

anotherNiceTaco.addTopping("Red onion");
aNiceTaco.addTopping("Sauce");

console.log(aNiceTaco);
