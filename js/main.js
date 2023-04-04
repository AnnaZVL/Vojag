//Slider
const swiper1 = new Swiper('.swiper_1', {
  slidesPerView: 3.5,
  spaceBetween: 20,
  breakpoints: {
     1440: {
      slidesPerView: 3.5, 
      spaceBetween: 20,     
    },
    768: {
      slidesPerView: 2.5, 
      spaceBetween: 20,     
    },
    576: {
      slidesPerView: 1.5, 
      spaceBetween: 20,     
    },
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
  },   
    loop: true,    
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },      
    navigation: {
      nextEl: '.slider__btn-next',
      prevEl: '.slider__btn-prev',
    },
    a11y: {
        containerMessage: 'Галерея товаров',
        paginationBulletMessage: `Слайд {{index}}`,
        slideLabelMessage: '{{index}} / {{slidesLength}}',
        enabled: true,
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        firstSlideMessage: 'Первый слайд',
        lastSlideMessage: 'Последний слайд',
    },
  });

  const swiper2 = new Swiper('.swiper_2', {    
  slidesPerView: 3.5,  
  breakpoints: {
    1440: {
      slidesPerView: 3.5, 
      spaceBetween: 20,     
    },
    768: {
      slidesPerView: 2.5, 
      spaceBetween: 20,     
    },
    576: {
      slidesPerView: 1.5, 
      spaceBetween: 20,     
    },
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
  },  
    loop: true,    
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },      
    navigation: {
      nextEl: '.slider__btn-next2',
      prevEl: '.slider__btn-prev2',
    },
    a11y: {
        containerMessage: 'Галерея товаров',
        paginationBulletMessage: `Слайд {{index}}`,
        slideLabelMessage: '{{index}} / {{slidesLength}}',
        enabled: true,
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        firstSlideMessage: 'Первый слайд',
        lastSlideMessage: 'Последний слайд',
    },    
  });

//Тултип
  tippy('.card-icon', {
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, iusto?',
    theme: 'blue',
  });

  