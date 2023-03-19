let numeros = [];

for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Insira um número: "));
  numeros.push(num);
}

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }

  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log("Número maior: " + maior);
console.log("Número menor: " + menor);
