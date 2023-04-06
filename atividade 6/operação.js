function calcularMedia() {
    var nome = prompt("Digite o nome do aluno:");
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));
  
    var media = (nota1 + nota2 + nota3) / 3;
  
    alert("A média de " + nome + " é: " + media.toFixed(2));
  }
  function calcularOperacoes() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
  
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var produto = num1 * num2;
    var divisao = num1 / num2;
    var resto = num1 % num2;
  
    alert("Soma: " + soma + "\n" +
          "Subtração: " + subtracao + "\n" +
          "Produto: " + produto + "\n" +
          "Divisão: " + divisao + "\n" +
          "Resto: " + resto);
  }
    