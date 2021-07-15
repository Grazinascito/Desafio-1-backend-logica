function solucao(min, km) {
    
  
       
    let kmBase = km <= 10 ? km : 10
    let kmAdd = km > 10 ? km - 10: 0
    let minBase = min <= 20 ? min : 20
    let minAdd = min > 20 ? min - 20: 0

    let total = (kmBase * 70) + (kmAdd * 50) + (minBase * 50) + (minAdd * 30)

    console.log(total)
    
}