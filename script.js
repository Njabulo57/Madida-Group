// nav bar animation
const sticky = document.querySelector('.header');

const stickyTop = sticky.offsetTop;

document.addEventListener('scroll', function () {
    if (window.scrollY > stickyTop) {
        sticky.classList.add('header-sticky');
    } else {
        sticky.classList.remove('header-sticky');
    }
});

//divisions animation
var currentIndex = 0;
const companyLink = document.querySelectorAll('.company-link');
setInterval(function () {
    companyLink[currentIndex].classList.remove('company-link-active');
    currentIndex = (currentIndex + 1) % companyLink.length;
    companyLink[currentIndex].classList.add('company-link-active')
}, 2000);

$('.services-list').slick({
  dots: false,
  infinite: false,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});