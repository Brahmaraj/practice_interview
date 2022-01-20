
let str = "string";//String
let num = 23;//Number
let bool = true;//Boolean
let undef = undefined;//Undefined
let big = 1n;//Big Int
let nil = null;
let sym = Symbol("try");
let obj = {x:"first property"};

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof big);
console.log(typeof undef);
console.log(typeof nil);//will print object and not null due to legacy reasons
console.log(typeof sym);
console.log(typeof obj);

// console.log(sym);
// let cmp_sym = Symbol("try");
// console.log(sym==cmp_sym);//false since Symbol always returns unique value
// let num1 = Number.MAX_SAFE_INTEGER;
// console.log(num1);
// const big_num = 9007199254740995;//not accurate
// const big_int = 9007199254740995n;//accurate after Number.MAX_SAFE_INTEGER 9007199254740991
// console.log(big_num);
// console.log(big_int);
