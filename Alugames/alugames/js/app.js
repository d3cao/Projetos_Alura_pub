function alterarStatus(num, numImg) {
    let game = document.getElementById(num);
    let pqpnaotafuncionando = document.getElementById(numImg);
    if (game.querySelector('a').classList.contains('dashboard__item__button--return')) {
        game.querySelector('a').classList.remove('dashboard__item__button--return');
        game.querySelector('a').textContent = 'Alugar';
        pqpnaotafuncionando.classList.remove("dashboard__item__img--rented");
    } else {
        game.querySelector('a').classList.add('dashboard__item__button--return');
        game.querySelector('a').textContent = 'Devolver';
        pqpnaotafuncionando.classList.add("dashboard__item__img--rented");
    }
}

function alterarStatus1() {
    alterarStatus('game-1', 'img-1');
}

function alterarStatus2() {
    alterarStatus('game-2', 'img-2');
}

function alterarStatus3() {
    alterarStatus('game-3', 'img-3');
}
