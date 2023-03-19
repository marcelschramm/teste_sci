let matriz = [];

for (let i = 0; i < 3; i++) {
    let nome = prompt("Insira o nome do aluno " + (i + 1) + ": ");
    let notas = [];

    for (let j = 0; j < 4; j++) {
        let nota = parseFloat(prompt("Insira a nota " + (j + 1) + " do aluno " + nome + ": "));
        notas.push(nota);
    }

    matriz.push([nome, notas]);
}

let maiorMedia = 0;
let menorMedia = Infinity;
let alunoMaiorMedia = "";
let alunoMenorMedia = "";

for (let i = 0; i < matriz.length; i++) {
    let nome = matriz[i][0];
    let notas = matriz[i][1];
    let soma = 0;

    for (let j = 0; j < notas.length; j++) {
        soma += notas[j];
    }

    let media = soma / notas.length;

    console.log("Aluno: " + nome);
    console.log("Média: " + media.toFixed(2));

    if (media > maiorMedia) {
        maiorMedia = media;
        alunoMaiorMedia = nome;
    }

    if (media < menorMedia) {
        menorMedia = media;
        alunoMenorMedia = nome;
    }
}

console.log("Aluno com a maior média: " + alunoMaiorMedia);
console.log("Aluno com a menor média: " + alunoMenorMedia);

