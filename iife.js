var loc = "global";
//Function declaration
function logger() {
 console.log(loc);           // logs global
 console.log(window.loc);    // logs global
}
logger();

//Function Expression
(function () {
  var loc = "global";
function logger() {
 console.log(loc);         // logs global
 console.log(window.loc);  // logs undefined
}
logger();
}) ()

//factory function and IIFE
let reference = (function() {   
   let secret = "I cannot be changed by simple assignment";    
    return {     
         //ES5 new method syntax
         change(value) {       
           secret = value;     
         },      
         get secret() {       
           return secret;     
         }   
       }; 
     })();  
console.log(reference.secret); // "I cannot be changed by simple assignment"
reference.change("I am changed"); 
console.log(reference.secret); // "I am changed"

let count = (function abc() {   
   let num = 0;    
    return {                            //returns an object (factory function)
         //ES5 new method syntax
         change(value) {       
           num = value;     
         },      
         get num() {       
            if(num==6)
            console.log(abc().num) //resets the value because num=0 is inside abc function and that line will
           return num++;               //be executed as well.
         }   
       }; 
     })();  
console.log(count);
console.log(count.num);
console.log(count.num);
console.log(count.num);
console.log(count.num);
console.log(count.num);
console.log(count.num);
console.log(count.num);
console.log(count.num);


