// import Swiper from 'swiper/bundle';
import Swiper, { FreeMode, Parallax, Mousewheel } from 'swiper';
Swiper.use([FreeMode, Parallax, Mousewheel]);


window.addEventListener('DOMContentLoaded', () => {
  
  new Swiper('.slider', {
    direction: 'vertical',
    freeMode: true,
    speed: 2400,
    parallax: true,
    spaceBetween: 18,
    mousewheel: {
      enabled: true,
      sensitivity: 2.4
    }
  });
  
});
