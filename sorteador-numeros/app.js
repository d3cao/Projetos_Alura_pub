let listaDeNumeros = []

function verify() {
    let num1 = documentoValor('de');
    let num2 = documentoValor('ate');
    let num3 = documentoValor('quantidade');
    let num4 = (num2 - num1);
    if (num1 > num2) {
        alert(`Não é possivel partir de ${num1} para ${num2}`);
    } 
    if (num3 > num4) {
        alert(`Não é possivel sortear mais números que o intervalo ${num1} até ${num2}`);
    }
}

function sortear() {
    verify();
    sequenciaDeNumeros();
    let texto = document.getElementById('resultado');
    texto.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaDeNumeros}</label>`
    alterarStatusBotao();
}

function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    listaDeNumeros = []
    let texto = document.getElementById('resultado');
    texto.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let but = document.getElementById('btn-reiniciar');
    if (but.classList.contains("container__botao-desabilitado")) {
        but.classList.remove("container__botao-desabilitado");
        but.classList.add("container__botao");
    } else {
        but.classList.remove("container__botao");
        but.classList.add("container__botao-desabilitado");
    }

}

function documentoValor(tag) {
    let valor = document.getElementById(tag).value;
    return valor;
}

function gerarNumeroAleatorio() {
    ate = documentoValor("ate");
    let numeroEscolhido = parseInt(Math.random()*ate + 1);
    return numeroEscolhido
}

function delimitador() {
    num = gerarNumeroAleatorio();
    de = documentoValor("de");
    if (num < de) {
        return delimitador()
    } 
    if (listaDeNumeros.includes(num)) {
        return delimitador();
    }
    return num
}

function sequenciaDeNumeros() {
    let quantidade = documentoValor("quantidade");
    let contador = 0;
    while (contador < quantidade) {
        let num = delimitador();
        listaDeNumeros.push(num);
        contador++
    }
}
