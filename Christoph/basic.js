                                // ---------------------Basic----------------------------------

// console.log("Hi, my name is Christoph");

// var age = 26;

// console.log("and I am " + age + " years old!")

// var players = ["Martin", "Thomas", "Peter", "Matthias", "Niki"];

// console.log("The most valuable player of the match is " + players[2]);

                                 // ---------------------Intermediate----------------------------------

// var cars = ["Tesla", "Mercedes", "BMW", "Mazda", "Fiat", "Nissan", "Dodge"];
// console.log(cars.sort());

// var fruits = ["apple","banana","kiwi"]
// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// var animals = ["monkey", "horse", "dog"];
// console.log(animals);
// animals.pop();
// animals.shift();
// console.log(animals);
// animals.push("monkey");
// animals.unshift("dog");
// console.log(animals);
// animals.unshift("cat");
// console.log(animals);

// var string = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
// document.write(string.split("/").join("<br><br>"));

                                // ---------------------Advanced----------------------------------

// var a = 7;
// var b = 14;                            
// var c = "21";                               
// var d = '36';                               
// var e = 42;
// var sum = a+b+Number(c)+Number(d)+e;
// console.log(sum);
// var f = '1';
// var g = 15;
// var h = 8;
// var i = "1";
// var product = Number(f)*g*h*Number(i);
// console.log(product);
// console.log(sum/product);

// var arr1 = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
// console.log(arr[1][1], arr[4][2], arr[5][3], arr[2][3], arr[2][1]);

                                    // ---------------------Advanced----------------------------------
// var arr = [ ["Vienna", "Madrid", "Tokyo"], ["is", "has", "does"], ["a", "an"], ["nice", "sweet", "bad"], ["city", "state", "venue"] ];
// document.write(arr[0][0], "<br>", arr[1][0], "<br>", arr[2][0], "<br>", arr[3][0], "<br>", arr[4][0]);

// var string1 = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
// document.write("<br><br>",string1.split("$").join(" "));

                                    // ---------------------extra exercise----------------------------------
var extra = "Hey there, i am a javascript developer, and i live in vienna";
document.write("<br><br>", extra.substring(10, 38), ".");

var extra1 = ['apple', 'banana', 'kiwi'];
extra1.splice(2, 0, "orange", "strawberry")
console.log(extra1);