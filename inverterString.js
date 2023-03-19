function inverter(palavra){
    let invertida = ''

    for(let i = palavra.length -1; i>= 0; i--){
        invertida = invertida + palavra[i]
    }

    return invertida;
}

console.log(inverter('teste1'))
console.log(inverter('olá mundo'))
console.log(inverter('palavra invertida'))
console.log(inverter('função'))