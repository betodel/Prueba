// function invertir(texto){
//     let textoInvertido='';
//     for(letra of texto){
//         textoInvertido=letra+textoInvertido;
//     }
//     return textoInvertido;
// }
// console.log(invertir('alberto fernandez'));

function operacion(numero){
    let resultado='';
    if(numero%3==0 && numero%5==0)resultado='Mult.3 y 5';
    else if(numero%3==0)resultado='Mult.3';
    else if(numero%5==0)resultado='Mult.5';
    return (resultado||numero)
}

function imprimir(cantNumeros)
{
    for(let i=1;i<=cantNumeros;i++){
        console.log(operacion(i));
    }
}

// function cuadrado(alto,ancho)
// {
//     let linea='';
//     for(let i=1;i<=alto;i++){
//         for(let j=1;j<=ancho;j++){
//             if(i>1 && i<alto){
//                 if(j>1 && j<ancho)linea+=' ';
//                 else linea+='*';
//             }
//             else{
//                 linea+='*';
//             }
//         }
//         linea+='\n';    
//     }
//     console.log(linea);
// }
module.exports=operacion;

//cuadrado(6,10);
imprimir(31);