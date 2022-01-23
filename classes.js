class Rectangele{
    constructor (length, breath){
        this.length = length;
        this.breath = breath;
    }
    static area (context) {
        return context.length*context.breath;
    }
}

let rect1 = new Rectangele(10,20);
console.log(Rectangele.area(rect1))