document.addEventListener('DOMContentLoaded',function(){
  
  let mm = gsap.matchMedia();

  mm.add("(min-width:1160px)",()=>{
    gsap.fromTo(".logo, .right-nav",{
      y:-100
    },
    {
      y:0,
      opacity:1,
      duration:0.7,
      delay: 0.2,
      ease: "sine.in",
    })

    gsap.fromTo(".cta h2",{
      x:-200
      },
      {
      x:0,
      opacity:1,
      duration:0.8,
      delay:.6,
      ease: "sine.in",
      onComplete: ()=>{
        //divisions animation
        var currentIndex = 0;
        const companyLink = document.querySelectorAll('.company-link');
        setInterval(function () {
            companyLink[currentIndex].classList.remove('company-link-active');
            currentIndex = (currentIndex + 1) % companyLink.length;
            companyLink[currentIndex].classList.add('company-link-active')
        }, 2700);
      }
    })
  })

  let mm2 = gsap.matchMedia();

  mm2.add("(max-width:1160px)", ()=>{
    gsap.to(".logo, .bi-list",{
      opacity:1,
      duration:0.5,
      delay: 0.2,
      ease: "sine.in",
    })

    gsap.fromTo(".cta h2",{
      y:-100
      },
      {
      y:0,
      opacity:1,
      duration:0.8,
      delay:.6,
      ease: "sine.in",
      onComplete: ()=>{
        //divisions animation
        var currentIndex = 0;
        const companyLink = document.querySelectorAll('.company-link');
        setInterval(function () {
            companyLink[currentIndex].classList.remove('company-link-active');
            currentIndex = (currentIndex + 1) % companyLink.length;
            companyLink[currentIndex].classList.add('company-link-active')
        }, 2700);
      }
    })
  })

  

  
})

function divisionAnimation(){
  
}
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

// mobile nav
const openMenu = document.querySelector('.bi-list');
const closeMenu = document.querySelector('.bi-x-lg');
openMenu.addEventListener("click",function() {
  // document.querySelector(".header-mobile").style.width = "100%";
  document.querySelector(".header-mobile").classList.add('menu-mobile-active');
})

closeMenu.addEventListener("click",function() {
  // document.querySelector(".header-mobile").style.width = "0%";
  document.querySelector(".header-mobile").classList.remove('menu-mobile-active');

})





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
        slidesToShow: 2.2,
        slidesToScroll: 2,
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
        slidesToShow: 1.4,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});