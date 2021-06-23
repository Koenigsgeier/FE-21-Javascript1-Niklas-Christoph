var carbrand = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
console.log(carbrand.sort());

var fruit = ['apple', 'banana', 'kiwi'];
fruit.push('orange');
console.log(fruit);
console.log(fruit.slice(0, 3));

var animals = ['dog', 'horse', 'monkey'];
console.log(animals);
animals.push('cat');
console.log(animals.sort());

var fruitstring = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = fruitstring.split('/');
console.log(temp.join(" \n "));