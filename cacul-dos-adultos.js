function solucao(lista) {
    
    const podeEntrar = lista.filter(x => x >= 18)
     
   
      let menor = Math.min(...podeEntrar)
       
      
   
     const todosSao = lista.every(x => x <= 17)
     if(todosSao === true){
       console.log("CRESCA E APARECA")
     }else{
         console.log(menor)
     }
   
   }