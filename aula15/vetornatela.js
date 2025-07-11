let valores = [8, 2, 6, 9, 1, 4, 7, 0, 5, 3];

/*
 for(let pos = 0; pos < valores.length; pos++){
    valores.sort()
   console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
} 
*/
for( let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}