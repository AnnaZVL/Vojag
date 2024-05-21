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

// Вызов меню и бургер-кнопка
const $burger = document.querySelector('.burger'),
$headerMenu = document.querySelector('.header-bottom');

$burger.addEventListener('click', () => {
  $burger.classList.toggle('open');
  $headerMenu.classList.toggle('open');
});

//=======================================================================

//Поиск
const $btnSearch = document.querySelector('.btn__serch'),
    $btnSearchActive = document.querySelector('.btn__serch-active'),
    $formSearch = document.querySelector('.menu__serch');

$formSearch.addEventListener('submit', (e) => {
  e.preventDefault();
});

$btnSearchActive.addEventListener('click', () => {  
  $formSearch.classList.add('active');
});

$btnSearch.addEventListener('click', () => {  
  $formSearch.classList.remove('active');
});

//=======================================================================
//Кнопка "В заказ"
const $btnCard= document.querySelectorAll('.card__btn'),
    $cardText = document.createElement('button'),
    $btnOrder = document.querySelector('.card__btn-order'),
    $btnPlus = document.createElement('button'),
    $btnMinus =  document.createElement('button');    
const $btnAdd = document.createElement('div'),      
    $cardBtnValue = document.createElement('span'),
    $cardBtnText = document.createElement('span');

    $btnCard.forEach(elem => {
      elem.addEventListener('click', () => {        
        setTimeout( () => {
          elem.append(createdBtnAdd())
        }, 300);
        elem.classList.add('active');
        //document.querySelector('.card__btn-order').remove();
      });
      
      
    });


//Создание кнопки "Добавления набора"
function createdBtnAdd (prop = '1') {


    $btnPlus.classList.add('card__btn-plus','text', 'btn-resert');
    $btnPlus.textContent = '+';
    $btnMinus.classList.add('card__btn-minus','text', 'btn-resert');
    $btnMinus.textContent = '-';

    $cardBtnValue.classList.add('card__btn-value');
    $cardBtnValue.textContent = prop;

    switch (prop) {
      case '1': 
        $cardBtnText.textContent = 'набор';
       break
      case '2' || '3' || '4': 
        $cardBtnText.textContent = 'набора';
        break
      default:
        $cardBtnText.textContent = 'наборов';      
    };    

    $cardText.classList.add('card__btn-text', 'text', 'btn-resert');
    $cardText.append($cardBtnValue, $cardBtnText);

    $btnAdd.append($btnMinus, $cardText, $btnPlus);
    $btnAdd.classList.add('card__btn-add');    
   

  return $btnAdd
}
//=======================================================================
//Добавление/удаление позиции в корзину
// const $btnMinus= document.querySelector('.card__btn-minus'),
//     $btnPlus = document.querySelector('.card__btn-plus'),
    const $order = document.querySelector('.order'),
    $orderAll = document.querySelector('.price'),
    $price = document.querySelector('.price-number');

// $btnMinus.addEventListener('click', () => {
  
//   $orderAll.textContent = Number($orderAll.textContent) - Number($price.textContent);
//   if (Number($orderAll.textContent) == 0) $order.classList.remove('active');
// })
// let n = 1;
// $btnPlus.addEventListener('click', () => {
//   n += 1;
//   createdBtnAdd(n)
//   $order.classList.add('active');
//  $orderAll.textContent = Number($orderAll.textContent) + Number($price.textContent)
// })


$cardText.addEventListener('click', () => {
  $order.classList.add('active');
  $orderAll.textContent = Number($orderAll.textContent) + Number($price.textContent)
})

  
/*Вызов конзины*/

const $basket = document.querySelector('.basket');

$order.addEventListener('click', () => {
  $basket.classList.add('open')
})

// document.body.addEventListener('click', (e) => {
//   if ($basket.classList.contains('.open')) {console.log('object');}
//     //if (e.target.matches('.basket')) 
// })