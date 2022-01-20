//console.log(dec_reinit);//undefined because of hoisting
//console.log(dec_update);//Reference Error because of hoisting in TDZ
//console.log(dec_only);//Reference Error because of hoisting in TDZ

var dec_reinit = 50;
let dec_update = 60;
const dec_only = 70;
console.log(dec_reinit);
console.log(dec_update);
console.log(dec_only);

var str_num = "20";

console.log(dec_only+str_num);//num converted to string Implicit Type Coercion
console.log(dec_only+Number(str_num));//string converted to number and adder Explicit type Conversion

// var dec_reinit = 80;//works because var is designed that way
// console.log(dec_reinit);

// dec_update = 70;//updating is possible in LET
// console.log(dec_update)
//let dec_update = 70; syntax error identifier already declared

//const dec_only = 60;//syntax error identifier already declared
//dec_only = 60;//type-error assignment to constant variable