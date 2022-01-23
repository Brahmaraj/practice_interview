
// var prom = new Promise((resolve,reject)=>{
//     resolve(function (val){
//         setTimeout(()=>console.log(val),Number(val+"000"))
//     });
// })


// prom.then((res)=> {
//     res(1)
//     return res;
// }).then((res)=>{
//     res(2)
//     return res;
// }).then((res)=>{
//     res(1)
//     return res;
// })

async function numbers(num){
    let result2 = await setTimeout(()=> 5,2000);
    console.log(result2);
}
numbers(5);