// faça uma função que retorne os n numeros de fibonacci
// 0+1 = 1+1 = 1+2 = 2+3 = 3+5 = 5+8 = ...

function fibonacci(quant) {
    let n1 = 0;
    let n2 = 1;
    let proximo = n1 + n2;
    
    for(var i = 1; i <= quant; i++) {
    
    n1 = n2
    n2 = proximo
    proximo = n1 + n2
    console.log(proximo);

    }
}

fibonacci(19)
