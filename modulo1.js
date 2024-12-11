function soma(n1, n2) {
    return n1 + n2;
}

//funcao anonima
let multi = function(n1, n2) {
    return n1 + n2;
}

console.log(multi(2,7))

function calc(op, n1, n2) {
    let res = op(n1, n2)
    console.log(res)
    return res
}

module.exports = soma;