
const campo = document.querySelector('.campo');
function digitar(num){

    const numero = document.querySelector('.campo').value
    var teste = document.querySelector('.campo').value = numero + num

    if(teste == "22"){

         document.querySelector('.imagem').innerHTML = '<img src="img/bolsonaro.jpg" alt="">'

        }


    if(teste == "13"){

        document.querySelector('.imagem').innerHTML = '<img src="img/lula.jpg" alt="">'
   
        }





    if(numero.length >= 2){
        document.querySelector('.campo').value = numero
    }

    
}


function reset(){
    document.querySelector('.campo').value = ''
    document.querySelector('.imagem').innerHTML = ''
}


function nulo(){
    document.querySelector('.imagem').innerHTML = ''
    const input = document.querySelector('.numcandi')
    const resul = document.querySelector('span')
    const containerBarra = document.querySelector('.container-barra')
    const barra = document.querySelector('.barra')
    input.style.display = 'none'
    containerBarra.style.display ='block'
    
    
}









