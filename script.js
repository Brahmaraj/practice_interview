for(var i=0; i<3;i++){
    setTimeout(()=>console.log(i),200);
}
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(`We’re at ${i}`), 100);
}