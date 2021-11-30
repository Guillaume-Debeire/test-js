const card = document.getElementById('card-1');

const img = document.getElementById('img');
const title = document.getElementById('title');
const white = document.getElementById('white');
const white2 = document.getElementById('white2');

const enhance = () => {
    title.classList.toggle('slide');
    img.classList.toggle('zoom')
    white.classList.toggle('flash')
    white2.classList.toggle('flash')
}

card.addEventListener('mouseenter', () => {
    enhance();
})
card.addEventListener('mouseleave', () => {
    enhance();
})

