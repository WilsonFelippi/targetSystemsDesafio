let sp = 67.83643;
let rj = 36.67866
let mg = 29.22988
let es = 27.16548
let out = 19.84953

let total = sp + rj + mg + es + out;

let porctSP = ((sp/total)*100).toFixed(2)
let porctRJ = ((rj/total)*100).toFixed(2)
let porctMG = ((mg/total)*100).toFixed(2)
let porctES = ((es/total)*100).toFixed(2)
let porctOutros = ((out/total)*100).toFixed(2)

console.log('Porcentagem de SP '+ porctSP)
console.log('Porcentagem de RJ '+ porctRJ)
console.log('Porcentagem de MG '+ porctMG)
console.log('Porcentagem de ES '+ porctES)
console.log('Porcentagem de OUTROS '+ porctOutros)