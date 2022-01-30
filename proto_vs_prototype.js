var obj1 = {
    name:"Brahma",
    age:21,
    sex:"M"
}
console.log(obj1.prototype);//undefined
console.log(obj1.__proto__);
console.log(obj1);

function new_func(...args){
    console.log("This is new Function");
    console.log(args);
}

console.log(new_func.prototype);//has prototype object which has constructor
                                //which points back to the function(prototype created for functions)
console.log(new_func.__proto__);//native code




