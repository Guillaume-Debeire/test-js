const root = document.getElementById('root');

const firstCard = document.getElementById('card-1')
const secondCard = document.getElementById('card-2')
const thirdCard = document.getElementById('card-3')

const bigButton1 = document.getElementById('b1')
const bigButton2 = document.getElementById('b2')
const bigButton3 = document.getElementById('b3')

const boost = (elm) => {
    normalize();
    elm.classList.toggle('boost');
}

const big = (elm) => {
    elm.classList.toggle('big');
}

const normalize = () => {
    firstCard.classList = 'card';
    secondCard.classList = 'card';
    thirdCard.classList = 'card';
}

window.addEventListener('click', () => {
    normalize();
})

firstCard.addEventListener('click', (evt) => {
    evt.stopPropagation();
    boost(firstCard)
});
secondCard.addEventListener('click', (evt) => {
    evt.stopPropagation();
    boost(secondCard)
});
thirdCard.addEventListener('click', (evt) => {
    evt.stopPropagation();
    boost(thirdCard)
});


bigButton1.addEventListener('click', (evt) => {
    evt.stopPropagation();
    big(firstCard)
});
bigButton2.addEventListener('click', (evt) => {
    evt.stopPropagation();
    big(secondCard)
});
bigButton3.addEventListener('click', (evt) => {
    evt.stopPropagation();
    big(thirdCard)
});
