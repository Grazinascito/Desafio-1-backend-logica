function solucao(lista) {
    const media = lista.reduce((acc,atual) => {
     
      return (acc + atual)
  },)
  
  console.log(media/lista.length)  
}
