// Código JavaScript para Node.js

const readline = require("readline");

// Cria uma interface para leitura de entrada e escrita de saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para obter a entrada e calcular o imposto
function calcularImposto() {
  rl.question("Digite o valor do salário: ", (entradaSalario) => {
    if (!entradaSalario.trim()) {
      console.log(
        "Entrada inválida para o salário. Certifique-se de inserir um número válido."
      );
      rl.close();
      return; // Encerra a função se a entrada for inválida
    }

    // Verifica e converte a entrada para float
    let valorSalario = parseFloat(entradaSalario);
    if (isNaN(valorSalario)) {
      console.log(
        "Entrada inválida para o salário. Certifique-se de inserir um número válido."
      );
      rl.close();
      return; // Encerra a função se a entrada for inválida
    }

    rl.question("Digite o valor dos benefícios: ", (entradaBeneficios) => {
      if (!entradaBeneficios.trim()) {
        console.log(
          "Entrada inválida para os benefícios. Certifique-se de inserir um número válido."
        );
        rl.close();
        return; // Encerra a função se a entrada for inválida
      }

      // Verifica e converte a entrada para float
      let valorBeneficios = parseFloat(entradaBeneficios);
      if (isNaN(valorBeneficios)) {
        console.log(
          "Entrada inválida para os benefícios. Certifique-se de inserir um número válido."
        );
        rl.close();
        return; // Encerra a função se a entrada for inválida
      }

      // Calcula o valor do imposto com base no salário
      let valorImposto;
      if (valorSalario >= 0 && valorSalario <= 1100) {
        valorImposto = 0.05 * valorSalario;
      } else if (valorSalario >= 1101 && valorSalario <= 2500) {
        valorImposto = 0.1 * valorSalario;
      } else {
        valorImposto = 0.15 * valorSalario;
      }

      // Calcula o valor final após o imposto e adiciona os benefícios
      let saida = valorSalario - valorImposto + valorBeneficios;

      // Exibe o resultado formatado com 2 casas decimais
      console.log(
        `O valor final após impostos e benefícios é: ${saida.toFixed(2)}`
      );

      // Fecha a interface readline
      rl.close();
    });
  });
}

// Executa a função para calcular o imposto
calcularImposto();
