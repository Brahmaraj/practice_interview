for(var i=0; i<3;i++){
    setTimeout(()=>console.log(i),200);
}
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(`We’re at ${i}`), 100);
}
var a = 20;
function change(){
    var a = 10;
    console.log(a);
}
change();
console.log(a);
{
let obj1 = {
    name :"obj1"
}
let obj2 = {
    name :"obj2"
}
let obj3 = {
    name :"obj3"
}
var myWeakMap = new WeakMap();
myWeakMap.set(obj1,1).set(obj2,2).set(obj3,3);
var myWeakSet = new WeakSet();
myWeakSet.add(obj1).add(obj2).add(obj3);
var myMap = new Map();
myMap.set('abcd',1).set('efgh',2).set('jklm',3);
}

console.log(myWeakMap);
console.log(myWeakSet);
console.log(myMap);



