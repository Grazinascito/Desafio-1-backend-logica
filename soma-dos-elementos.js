
function solucao(lista) {
    const total = lista.reduce((acc,atual) => {
        return acc + atual
    })
    
    console.log(total)
  }