
function solucao(numeros) {
    const result = numeros.reduce((acc,atual) => {
   return acc + atual
   })
     const modulo = result % numeros.length 
   if(modulo !== 0){
   console.log(modulo)
   }else{
     console.log(numeros.length)
   }

 
}