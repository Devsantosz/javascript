var frutas = ['Laranja', 'Uva', 'Pera'];

/*Imprimi os valores da lista add ate que a quantidade do valor da lista seja menor que o tamanho da lista*/
for(var i = 0; i < frutas.length; i++){
     console.log('Nome da Fruta contida no Array: ' + frutas[i]);
}
/*Mostra cada item que a dentro da lista, percorendo cada item*/
for(var fruta in frutas){
     console.log('Nome da Fruta contida no Array: ' + frutas[fruta]);
}