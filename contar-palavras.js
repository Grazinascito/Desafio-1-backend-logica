
function solucao(texto) {
    let arr = texto.trim().split(" ");

    let temPalavras = 0;
  for( let i = 0; i < arr.length; i++){
     if(arr[i].length >= 1){
     temPalavras++

     }
  }

   
    console.log(temPalavras)
}
