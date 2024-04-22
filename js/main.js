$(document).ready(function(){
    $('.gallery-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        autoplay: true,
        autoSpeed: 2000, 
        speed: 900
    });
  });

  let button = document.querySelector(".fa-bars")
  let menuMobile = document.querySelector(".navbar-itens-mobile")

  button.addEventListener('click', function() {
    if(menuMobile.classList.contains('open-mobile')) {
        menuMobile.classList.remove('open-mobile')
    } else {
        menuMobile.classList.add('open-mobile')
    }
  })