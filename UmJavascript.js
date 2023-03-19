let numeros = [];
let pares = [];
let impares = [];
let soma = 0;


for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Insira um número: "));
  numeros.push(num);

  if (num % 2 === 0) {
    pares.push(num);
  } else {
    impares.push(num);
  }

  soma += num;
}


let media = soma / numeros.length;


console.log("Números pares: " + pares.join(", "));

console.log("Números ímpares: " + impares.join(", "));

console.log("Média geral: " + media);
