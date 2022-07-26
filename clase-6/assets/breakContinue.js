//Break-Continue
console.warn("Break")
for (let index = 0;  index<5; index++) {
   if (index==2) {
       break
       console.log(index)
   }
   console.log(index)
}

//Break-Continue (si esta lo que se busca que salga del ciclo)
console.warn("Continue") //imprime todo los numeros menos el 1
for (let indexx = 0;  indexx < 5; indexx++) {
   if (indexx==1) {
       continue
       console.log(indexx)
   }
   console.log(indexx)
}