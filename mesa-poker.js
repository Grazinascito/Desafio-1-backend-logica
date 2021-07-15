
function solucao(min, max, valores) {
    const newArr = []
     const filtre = valores.filter(x =>{
          if(x >= min && x <= max){
             newArr.push(x)
          }
         
         
     })
     
     
     console.log(newArr)
        
 }