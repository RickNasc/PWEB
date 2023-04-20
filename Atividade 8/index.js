const pessoas = [];

function adicionarPessoa() {
  const idade = parseInt(document.getElementById('idade').value);
  const sexo = document.getElementById('sexo').value;
  const opiniao = parseInt(document.getElementById('opiniao').value);
  
  pessoas.push({ idade, sexo, opiniao });
  
  document.getElementById('idade').value = '';
  
  calcularResultados();
}

function calcularResultados() {
  let somaIdade = 0;
  let maxIdade = 0;
  let minIdade = 0;
  let qtdPessimo = 0;
  let qtdOtimoBom = 0;
  let qtdMulheres = 0;
  let qtdHomens = 0;
  
  for (let i = 0; i < pessoas.length; i++) {
    somaIdade += pessoas[i].idade;
    
    if (pessoas[i].idade > maxIdade) {
      maxIdade = pessoas[i].idade;
    }
    
    if (pessoas[i].idade < minIdade) {
      minIdade = pessoas[i].idade;
    }
    
    if (pessoas[i].opiniao === 1) {
      qtdPessimo++;
    } else if (pessoas[i].opiniao === 4 || pessoas[i].opiniao === 3) {
      qtdOtimoBom++;
    }
    
    if (pessoas[i].sexo === 'F') {
      qtdMulheres++;
    } else if (pessoas[i].sexo === 'M') {
      qtdHomens++;
    }
  }
  
  const mediaIdade = somaIdade / pessoas.length;
  const percOtimoBom = (qtdOtimoBom / pessoas.length) * 100;
  
  document.getElementById('media-idade').textContent = mediaIdade.toFixed(1);
  document.getElementById('max-idade').textContent = maxIdade;
  document.getElementById('min-idade').textContent = minIdade;
  document.getElementById('qtd-pessimo').textContent = qtdPessimo;
  document.getElementById('perc-otimo-bom').textContent = percOtimoBom.toFixed(1) + '%';
  document.getElementById('qtd-mulheres').textContent = qtdMulheres;
  document.getElementById('qtd-homens').textContent = qtdHomens;
}

document.getElementById('adicionar').addEventListener('click', adicionarPessoa);

function limparResultados() {
    pessoas.length = 0;
    
    document.getElementById('media-idade').textContent = '';
    document.getElementById('max-idade').textContent = '';
    document.getElementById('min-idade').textContent = '';
    document.getElementById('qtd-pessimo').textContent = '';
    document.getElementById('perc-otimo-bom').textContent = '';
    document.getElementById('qtd-mulheres').textContent = '';
    document.getElementById('qtd-homens').textContent = '';
  }
  
  document.getElementById('limpar').addEventListener('click', limparResultados);
  