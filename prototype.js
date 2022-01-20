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

function mirror_no(n){
    console.log(n);
    if(n>1)
        mirror_no(n-1);
    console.log(n);
}

mirror_no(4);

console.log(factorial(3));

array1 = [1,2,3,4,5,6,7,8,9,10];

let square = (ele) => ele*ele ;

// array1.forEach(element => {
//     console.log(square(element));
// });

console.log(array1.map(square))
console.log(array1.filter(ele=>ele>5))
console.log(array1.reduce((prev,curr)=>{
    prev += curr;
    return prev;
},10))

function Person(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.greet = function(){
        return `${this.name} is ${this.age} years old and is ${this.sex}`;
    }
}

let newPerson = {
    newgreet: function(){
        return `${this.name} welcome to JS`;
    }
}

const person1 = new Person("Brahma",21,"male");
console.log(person1.greet());
console.log(Object.setPrototypeOf(person1, newPerson));
console.log(person1.newgreet()); //__proto__ used to look up the chain
console.log(person1.__proto__)//