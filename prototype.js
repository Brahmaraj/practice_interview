var house = {
    color:"black",
    size:"huge",
    expensive:true
}
function House(color,size,expensive){
    this.size = size;
    this.color = color;
    this.expensive = expensive;
}
function prototypeCheck(){
    
}
var myhouse = new House("red","very big",true);
console.log(Object.getPrototypeOf(myhouse));//__proto__ -> poitning to House's prototype
console.log(myhouse.__proto__)
console.log(prototypeCheck.__proto__.__proto__)
console.log(House.__proto__);//in javascript everything is object!!
console.log(Object.prototype)
//console.log(house.prototype);

function factorial(n){
    while(n>1)
    return n*factorial(n-1)
    return 1;
}

console.log(factorial(3));