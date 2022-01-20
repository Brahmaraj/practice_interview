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

var myhouse = new House("red","very big",true);
console.log(Object.getPrototypeOf(myhouse));//__proto__ -> poitning to House's prototype
console.log(House.prototype)
console.log(house.prototype);