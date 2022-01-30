var array = [1,2,3,4,5,6,7,8,[11,12,13,14,[111,112,113,114]]]

for(let i in array){
    console.log(i); //iterates over index doesn't give value
}
for(let i of array){
    console.log(i);//iterates over values and goes deep inside
}