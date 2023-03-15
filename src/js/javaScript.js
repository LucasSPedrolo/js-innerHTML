const numero = Number(prompt('digite um numero'));

const numeroUser1 = document.getElementById('numeroUser');

const raizQuadrada = document.getElementById('raizNumero');

const numeroInteiro = document.getElementById('inteiro');

const validacao = document.getElementById('validacao');

const numArrendondandoBaixo = document.getElementById('numBaixo');

const numArrendondandoCima = document.getElementById('numAcima');

const numArrendondandoMeio = document.getElementById('numMeio');

const numeroDecimal = document.getElementById('decimais');

numeroUser1.innerHTML = numero;

raizQuadrada.innerHTML =`<div class="teste01">${numero**(1/2)}</div>`;

numeroInteiro.innerHTML = numero;

validacao.innerHTML = `<p>${validacao}</p>`;

validacao.innerHTML = Number.isInteger(numero);

numArrendondandoBaixo.innerHTML = Math.floor(numero);

numArrendondandoCima.innerHTML = Math.ceil(numero);

numArrendondandoMeio.innerHTML = Math.round(numero);

numeroDecimal.innerHTML = numero.toFixed(2);