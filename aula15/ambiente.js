let num = [8,2,6,9,1,4,7,0,3]

console.log(`O vetor é ${num}`)
console.log(`O vetor tem ${num.length} posicoes`)//Contagem de elementos do vetor

let pos = num.indexOf(7)
if( pos== -1){
    console.log(`O valor 5 não foi encontrado`)
}else{
    console.log(`O valor 5 está na posição ${pos}`)
}
