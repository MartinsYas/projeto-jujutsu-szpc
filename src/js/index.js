/*
OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista.
- Passo1 - Dar um jeito de pegar o elemento HTML da seta avancar.
- Passo2 - Dar um jeito de identificar o clique do usuário na seta avançar.
- Passo3 - Fazer aparecer o próximo cartão da lista.
- Passo4 - Buscar o cartão que está selecionado e esconder.

OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista.
- Passo1 - Dar um jeito de pegar o elemento HTML da seta voltar.
- Passo2 - Dar um jeito de identificar o clique do usuário na seta voltar
- Passo3 - Fazer aparecer o cartão anterior da lista.
- Passo4 - Buscar o cartão que está selecionado e esconder.
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    esconderCartaoSelecionado();



    cartaoAtual++;
    mostrarCartao();
});



btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if (ehPrimeiroCartao) return;

    esconderCartaoSelecionado();


    cartaoAtual--;
    mostrarCartao();
});


function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

