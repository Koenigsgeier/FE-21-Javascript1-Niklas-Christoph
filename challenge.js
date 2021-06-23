var arr = [ ["Vienna", "Madrid", "Tokyo"], ["is", "has", "does"], ["a", "an"], ["nice", "sweet", "bad"], ["city", "state", "venue"] ];
console.log(arr[0][0], "\n", '  ', arr[1][0], "\n", '    ', arr[2][0], "\n", '      ', arr[3][0], "\n", '        ',arr[4][0]);

var stringManipulation = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"
var temp = new Array()
temp = (stringManipulation.split('$'))
document.write(temp.join(" "));