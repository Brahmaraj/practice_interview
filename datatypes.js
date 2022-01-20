
let str = "string";//String
let num = 23;//Number
let bool = true;//Boolean
let undef = undefined;//Undefined
let big = 1n;//Big Int
let nil = null;
let sym = Symbol("try");

console.log(sym);
let cmp_sym = Symbol("try");
console.log(sym==cmp_sym);//false since Symbol always returns unique value
// let num1 = Number.MAX_SAFE_INTEGER;
// console.log(num1);
// const big_num = 9007199254740995;//not accurate
// const big_int = 9007199254740995n;//accurate after Number.MAX_SAFE_INTEGER 9007199254740991
// console.log(big_num);
// console.log(big_int);
