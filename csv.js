// add um novo aluno no arquivo
const fs = require("fs");

let nome = "Joao";
let cidade = "Lá ele";
let idade = 19;

let dados = nome + "," + idade + "," + cidade + "\n";

fs.writeFile("alunos.csv", dados, {flag: "a"}, function(){
    console.log("gravado")
})

fs.readFile("alunos.csv", "utf8", function(erro, dados){
    if(erro) {
        console.log(erro);
    } else {
        console.log(dados);
    }
    
})