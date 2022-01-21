var my_weak_map = new WeakMap();
var my_weak_set = new WeakSet();

{
let obj1 = {
    inside:"Block Scope"
}
my_weak_set.add(obj1);
}

let obj2 = {
    scope:"global"
}
my_weak_map.set(obj2,"1");
obj2=null;
console.log(my_weak_map);
console.log(my_weak_set);