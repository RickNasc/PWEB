function retornaMaiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  function ordenaNumeros(num1, num2, num3) {
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    return numeros;
  }
  