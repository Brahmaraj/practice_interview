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

//closure
function bigContainer(){
    var a = 'closure';
    function innerContaier(){
        console.log(a);
    }
    return innerContaier;
}
bigContainer()();
var global = "global";
function first(){
    let infirst = "Inside First";
    function second(){
        let insecond = "Inside Second";
        function third(){
            let inthird = "Inside Third";
            function fourth(){
                console.log(inthird+" ",insecond+" ",infirst+" ",global);
            }
            fourth();//breakpoint here for scope chain
        }
        third(); // doing this pushes functions on top of each other
                // if we return third and execute it using currying then functions aren't
                // pushed on top of each other the returned function is executed here 
                // calling is poped out of stack and inner func is pushed on top of stack
    }
    return second;
}
first()(); // due to this first is popped of the stack and second is pushed as after return 
            // there is nothing so the returned function is now added to stack !!!!

