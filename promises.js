
var prom = new Promise((resolve,reject)=>{
    resolve(function (val){
        setTimeout(()=>console.log(val),Number(val+"000"))
    });
})


prom.then((res)=> {
    res(1)
    return res;
}).then((res)=>{
    res(2)
    return res;
}).then((res)=>{
    res(1)
    return res;
})



setTimeout(()=>console.log("1 synchronous"),1000);
setTimeout(()=>console.log("2 synchronous"),1000);
setTimeout(()=>console.log("1 synchronous"),1000);