
var prom = new Promise((resolve,reject)=>{
    resolve(count);
})
let a = 0
function count(){
    a++;
    setTimeout(()=>{
        console.log(a);
    },Number(a+"000"));
}

prom.then((res)=> {
    res();
    return res;
}).then((res)=>{
    res();
    return res;
}).then((res)=>{
    res();
    return res;
})