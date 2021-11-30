const card = document.getElementById('card-1');

const img = document.getElementById('img');
const title = document.getElementById('title');
const white = document.getElementById('white');
const white2 = document.getElementById('white2');

const scrollElement = document.getElementById('scroll');

const scrollAction = () => {
    scrollElement.scrollTo({
        top: 280,
        behavior: 'smooth'
    });
}

const scrollBack = () => {
    scrollElement.scrollTo({
        top: 0,
    })
}

const smoothScroll = (h) => {
    let i = h || 0;
    if (i < 400) {
      setTimeout(() => {
        scrollElement.scrollTo(0, i);
        smoothScroll(i + 0.15);
      }, );
    }
  }

const enhance = () => {
    title.classList.toggle('slide');
    img.classList.toggle('zoom')
    white.classList.toggle('flash')
    white2.classList.toggle('flash')
}

card.addEventListener('mouseenter', () => {
    enhance();
    smoothScroll();
})
card.addEventListener('mouseleave', () => {
    enhance();
})

