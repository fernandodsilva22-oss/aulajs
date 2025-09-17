'use strict'; //Ajuda evitar erros no js

const inputNome = document.getElementById('nome');
//campo de texto do nome
const inputAno = document.getElementById('ano');
//campo numérico do ano
const botaoCalcular = document.getElementById
('btn-calcular')
//botao de calcular a idade
const resultado = document.getElementById('resultado'); //parágrafo onde aparece o resultado

//descobrir ano atual
const anoAtual = new Date().getFullYear();
//ler o que o usuúrio digitou
botaoCalcular.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const anoNascStr = inputAno.value.trim();
    const anoNasc = Number(anoNascStr);
    const anoValido = Number.isInteger(anoNasc) &&
    anoNasc >= 1900 && anoNasc <= anoAtual;

    if(!anoValido) {
        resultado.textContent = 'Por favor, coloque um ano válido';
        return; //sai da função sem continuar
          
}
const idade = anoAtual - anoNasc;

})








