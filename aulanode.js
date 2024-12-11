const soma = require("./modulo1")
const fs = require("fs");

let texto = "conteudo";

console.log("antes")

fs.writeFile("arquivo.txt", texto, function(){
    console.log("terminou");
});

console.log("depois")

