console.log("start"); // in call stack
setTimeout(()=>{
    console.log("MacroTask Queue"); // in call back queue
},0);
new Promise((resolve)=>{
    resolve("MicroTask Queue");
}).then((result)=>console.log(result)); // in micro task queue (high priority than cbq)
console.log("end"); // call stack
