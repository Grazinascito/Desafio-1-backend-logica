
function solucao(precos) {
    let min = Math.min(...precos)
    
    let percent = 0;
    if(precos.length >= 3){
      percent = min * 0.50
        
        const precosFiltrados = precos.sort((x,y) => x - y).slice(1)
       
         precosFiltrados.push(percent)
  
    
      const imprima =  precosFiltrados.reduce((acc,atual) => acc + atual)
  
      console.log(imprima)
      
    }else{
      const semDescont = precos.reduce((acc,atual) => acc + atual)
      console.log(semDescont)
    }
  
    
  }
  