// Optional: Auto-scroll the carousel
const carousel = document.getElementById('story-carousel');

let scrollPos = 0;
setInterval(() => {
  scrollPos += 250;
  if (scrollPos >= carousel.scrollWidth - carousel.clientWidth) {
    scrollPos = 0;
  }
  carousel.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
}, 3000);
