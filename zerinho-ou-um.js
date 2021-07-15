function solucao(jogadores) {
    let arrUm = [];
    let arrZero = [];
    jogadores.filter(x =>{
        if(x.jogada === 0){
             arrZero.push(x)
        }else if(x.jogada === 1){
             arrUm.push(x)
        }
    });
  
    if(arrUm.length === 1){
        console.log(arrUm[0].nome)
    }else if(arrZero.length === 1){
        console.log(arrZero[0].nome)
    }else{
        console.log("NINGUEM")
    }
  
    
  }