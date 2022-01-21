var my_weak_map = new WeakMap();
var my_weak_set = new WeakSet();

{
let obj1 = {
    inside:"Block Scope"
}
my_weak_set.add(obj1);
}

let person1 = {
    name :"brahma",
    l_name:"rathod",
    age:21,
    sex:"M",
    interests:"web development, cyber security, block chain etc"
}
// my_weak_map.set(person1,"1");
// obj2=null;
// console.log(my_weak_map);
// console.log(my_weak_set);
//Object Destructuring
const {name, l_name, ...lastthree} = person1; // has to be same as the property name
console.log(name);
console.log(l_name)
console.log(lastthree)
