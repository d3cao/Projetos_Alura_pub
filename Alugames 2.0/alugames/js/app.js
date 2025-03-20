let contador = 1;

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    if (game.querySelector('a').classList.contains('dashboard__item__button--return')) {
        if (window.confirm('Você tem certeza que deseja devolver ?')) {
            game.querySelector('a').classList.remove('dashboard__item__button--return');
            game.querySelector('a').textContent = 'Alugar';
            game.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
            contador--
        }
        
    } else {
        game.querySelector('a').classList.add('dashboard__item__button--return');
        game.querySelector('a').textContent = 'Devolver';
        game.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
        contador++
    }
    console.log(contador);
}
