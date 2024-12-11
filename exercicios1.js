// inverter o texto
// Oi Gabriel = leirbaG iO
let texto = ""
let textoinvertido = texto.split("").reverse().join("")
console.log(textoinvertido)

// contar vogais e consoantes
// texto -> vogais = 2; consoantes = 3
let vogais = ["a", "e", "i", "o", "u"]; 
let num_vogal = 0;
let num_cons = 0;

for (let ini = 0; ini <= texto.length -1; ini++)
{
    let letra = texto.charAt(ini); 
    
    if (vogais.includes(letra) == true)
    {
        num_vogal += 1;
    } else 
    {
        num_cons += 1;
    }
}

console.log("vogais: "+ num_vogal + " consoantes: " +num_cons);

// 3 - colocar o texto em ordem alfabetica
// texto -> eottx
function ordenarpalavra(palavra){
    let letras = palavra.split('')
    letras.sort()
    return letras.join('')
}
const palavra = "texto"
const palavraordenada = ordenarpalavra(palavra)
console.log(palavraordenada)
