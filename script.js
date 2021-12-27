let entrada = '90876722817827123488881234567';

let arrayNum = []
let arrayVerify = []

let igual = true
let sequencia = []

let once = 0
let ativador = 0
function numeSequenc(){
    for(let i = 0; i < entrada.length; i++) {
        arrayNum.push(Number(entrada[i]))
    }
      
    for(let j=0; j <arrayNum.length; j++) {

            let digitoAtual = entrada.substring(j, j+1)    
        
            let digitoAnterior = entrada.substring(j - 1, j)    
           
            

                let anterior = parseInt(digitoAnterior)+1
                let atual = parseInt(digitoAtual)
                if(ativador == 0){
                    if(anterior == atual){

                        if(Number(digitoAnterior) + 1 == atual){
                            if(once == 0){
                                sequencia.push(Number(digitoAnterior))
                            }
                            
                            once++
                        } 
                        sequencia.push(Number(arrayNum[j]))                               
                    } else if(anterior != atual & sequencia.length > 0){
                        ativador++
                    }
                }  
    }
    console.log(sequencia)
}
numeSequenc()