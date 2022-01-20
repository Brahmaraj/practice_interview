let add = (x,y) => x+y;

function operation(logic,operand1,operand2){
    return logic(operand1,operand2);
}

console.log(operation(add,3,5));