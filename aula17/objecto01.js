let amigo = {nome:'josé',
sexo:'M',
peso: 86.2,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);
amigo.engordar(2)