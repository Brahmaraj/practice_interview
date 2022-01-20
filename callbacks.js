let add = (x,y) => x+y;

let sub = (x,y) => x-y;

let mul = (x,y) => x*y;

function operation(logic,operand1,operand2){ //operation is HOF that takes add as callback and returns result
    return logic(operand1,operand2);
}

console.log(operation(add,3,5));
console.log(operation(sub,3,5));
console.log(operation(mul,3,5));