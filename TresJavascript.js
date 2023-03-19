let continuar = true;

while (continuar) {
  let nome = prompt("Insira o nome do aluno: ");
  let notas = [];

  for (let i = 0; i < 4; i++) {
    let nota = parseFloat(prompt("Insira a nota " + (i + 1) + " do aluno " + nome + ": "));
    notas.push(nota);
  }

  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  let media = soma / notas.length;

  console.log("Aluno: " + nome);

  if (media < 6) {
    console.log("Média: " + media.toFixed(2) + " - Reprovado");
  } else {
    console.log("Média: " + media.toFixed(2) + " - Aprovado");
  }

  let opcao = prompt("Deseja inserir outro aluno? (S/N)").toUpperCase();

  if (opcao === "N") {
    continuar = false;
  }
}
