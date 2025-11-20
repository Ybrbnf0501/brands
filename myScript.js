new Swiper('.swiper-container',{
    breakpoints:{
        768:{
            spaceBetween: 18,
            enabled:false
        },
        
        1120:{
            enabled:false
        },

          320: {
            enabled: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            slidesOffsetAfter: 86,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
    }   }
})
  

const brandsList = document.querySelector('.brands__list');
const brandsArrows = document.querySelector('.brands-button__arrows');
const buttonShowAll = document.querySelector('.brands-button__show-all');
const brandsText = document.querySelector('.brands__show-all-text');

buttonShowAll.onclick = function(){
    brandsList.classList.toggle('show-more');
    brandsArrows.classList.toggle('revers__arrows');
    brandsText.classList.toggle('brands-button__text--hide-all')

    if (brandsText.textContent === 'Показать все') {
        brandsText.textContent = 'Скрыть';
    } else {
        brandsText.textContent = 'Показать все';
    }
}
