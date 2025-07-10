function tabuada(){
    let num = document.getElementById('txtn')
    let sel = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        sel.innerHTML = '' // Limpa o conteúdo do select antes de adicionar novos itens
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            sel.appendChild(item)   
            item.value = `tab ${c}` 
            c++
        }
    }
    
}