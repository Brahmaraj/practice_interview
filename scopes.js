//Local, Block, Functional scopes and Scope Chain
{
    console.log(insidelocalscope);
    var insidelocalscope = 10;
    console.log(insidelocalscope);
}


console.log(insidelocalscope);

{}//this is called a block let and const are blocked scope if theyre defined in block will be 
  //accessible only in block(TDZ)

function funcScop(){
    var a = 10;
    let b = 200;
    const c = 3000;
    console.log(a+" ",b+" ",c);
}
funcScop();
//console.log(a+" ",b+" ",c); reference error because var is func scoped and function has {} block as well
//so let and const are'nt accesible from outside either