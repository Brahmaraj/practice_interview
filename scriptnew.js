var dynamic_div = document.createElement('div');
    dynamic_div.id = 'new_div';
    dynamic_div.innerHTML = 'Hi Brahmaraj'
document.querySelector('body').appendChild(dynamic_div);

function changecolorfunc(){
   document.getElementById('new_div').innerHTML = 'Hi Vijay';
}
console.log(a);
var a = 10 ;
console.log(a);

var new_array = [10000,50000,80000,60000]
// var sum = 0;
// var tot = new_array.forEach(function(ele){
//     sum+=ele;
//     return sum;
// });

var fil_result = new_array.filter((elem)=>elem>50000);
// console.log(sum);
console.log(fil_result);
var new_fil_result = new_array.reduce((acc,curr)=> acc+curr)
console.log(new_fil_result);