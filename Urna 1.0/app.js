

function digitar(num){

    const numero = document.querySelector('.campo').value;
    document.querySelector('.campo'). value = numero + num
    if(numero.length >= 2){
        document.querySelector('.campo').value = numero
    }

    
}


function reset(){
    document.querySelector('.campo').value = ''
}


function nulo(){

    const input = document.querySelector('.numcandi')
    const resul = document.querySelector('span')
    const containerBarra = document.querySelector('.container-barra')
    const barra = document.querySelector('.barra')
    input.style.display = 'none'
    containerBarra.style.display ='block'
    
    
}



