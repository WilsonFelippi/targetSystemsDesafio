function fibonacci(num){
    let ultimo = 1;
    let penultimo = 0;
    let somafib = penultimo + ultimo;

    while(somafib <= num){
        if(num == somafib){
            return true;
        }
        penultimo = ultimo;
        ultimo = somafib;
        somafib = ultimo + penultimo;
    }
    return false;
}

console.log(fibonacci(3));
console.log(fibonacci(6));
console.log(fibonacci(8));
console.log(fibonacci(13));
console.log(fibonacci(35));