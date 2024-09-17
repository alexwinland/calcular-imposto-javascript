# Calculador de Impostos em JavaScript para Node.js 🧮💰

Olá, pessoal! 👋 Se você sempre quis saber quanto realmente vai levar pra casa depois dos impostos e benefícios, este código em JavaScript vai te ajudar! Escrito para Node.js, ele faz todo o trabalho pesado para você. Vamos conferir como funciona essa belezura?

## O Que Este Código Faz?

Este código é como um assistente pessoal digital que calcula o quanto você vai receber após o imposto e adicionar seus benefícios. E tudo isso na linha de comando! 🚀

### O Que Acontece Passo a Passo:

1. **Solicita o Salário**:
   - O programa começa pedindo o valor do seu salário. É só digitar e pressionar Enter!

2. **Pede os Benefícios**:
   - Em seguida, ele pergunta pelo valor dos benefícios que você recebe. Pode ser um bônus, vale-alimentação ou qualquer outra coisa legal.

3. **Calcula o Imposto**:
   - O código calcula o imposto com base nas seguintes faixas salariais:
     - **0 a 1100**: Imposto de 5%.
     - **1101 a 2500**: Imposto de 10%.
     - **Acima de 2500**: Imposto de 15%.
   - Assim, você não precisa se preocupar com cálculos complicados!

4. **Calcula o Valor Final**:
   - Depois de calcular o imposto, ele ajusta o valor final com base nos seus benefícios e exibe o resultado.

5. **Exibe o Resultado**:
   - O resultado é mostrado com duas casas decimais, porque precisão é importante quando se trata de dinheiro! 💵

## Como Usar

### Passo 1: Prepare Seu Ambiente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no seu computador. Se ainda não tiver, faça o download e instale-o.

### Passo 2: Copie o Código

Copie o código fornecido e cole-o em um arquivo chamado `calcular_imposto.js` ou qualquer nome que você preferir.

### Passo 3: Execute o Código

Abra o terminal ou prompt de comando, navegue até o diretório onde você salvou o arquivo e execute o código com o comando:
```bash
node calcular_imposto.js
