// for(var i=0; i<3;i++){
//     setTimeout(()=>console.log(i),200);
// }
// for (var i = 0; i < 3; i++) {
//   setTimeout(_ => console.log(`We’re at ${i}`), 100);
// }
// var a = 20;
// function change(){
//     var a = 10;
//     console.log(a);
// }
// change();
// console.log(a);
// {
// let obj1 = {
//     name :"obj1"
// }
// let obj2 = {
//     name :"obj2"
// }
// let obj3 = {
//     name :"obj3"
// }
// var myWeakMap = new WeakMap();
// myWeakMap.set(obj1,1).set(obj2,2).set(obj3,3);
// var myWeakSet = new WeakSet();
// myWeakSet.add(obj1).add(obj2).add(obj3);
// var myMap = new Map();
// myMap.set('abcd',1).set('efgh',2).set('jklm',3);
// }

// console.log(myWeakMap);
// console.log(myWeakSet);
// console.log(myMap);


//after loading this page goto performance and click on dustbin icon to garbage collect
//this remove the refrence to objects that aren't in scope (out of scope/different context)

{
    let x = {
        a:[1,2]
    };
    var myweakMap = new WeakSet();
    myweakMap.add(x);
    
}
console.log(myweakMap);

const wset = new WeakMap();

// top level static var, should show up in `console.log(wset)` after a run
let arr = [1];
wset.set(arr,1);

function test() {
  let obj = {a:1}; //stack var, should get GCed
  wset.set(obj,2);
}

test();

//if we wanted to get rid of `arr` in `wset`, we could explicitly de-reference it
//arr = null;

// when run with devtools console open, `wset` always holds onto `obj`
// when devtools are closed and then opened after, `wset` has the `arr` entry,
// but not the `obj` entry, as expected
console.log(wset);

arr = null;