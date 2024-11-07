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
  })

  let mm2 = gsap.matchMedia();

  mm2.add("(max-width:1160px)", ()=>{
    gsap.to(".logo, .bi-list",{
      opacity:1,
      duration:0.5,
      delay: 0.2,
      ease: "sine.in",
    })
  })

  

  
})


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



// footer animation
gsap.from(".subscribe-widget",{
  scrollTrigger: {
    trigger: ".subscribe-widget",
    start: 'center bottom',
    // markers: true
    },
  y: -80,
  // opacity: 0,
  ease: "easeInSine",
  duration: 2,
})

gsap.fromTo("footer",
  {
    '--footer-before-height': "40rem",
  },
  {
  scrollTrigger: {
    trigger: ".subscribe-widget",
    start: 'bottom bottom',
    // markers: true
    },
    '--footer-before-height': "10rem",
  // opacity: 0,
  ease: "easeInSine",
  duration: 1.3,
})

let mobilemm = gsap.matchMedia();

mobilemm.add("(max-width:1160px)",()=>{

  gsap.from(".footer-logo",{
    scrollTrigger: {
      trigger: ".footer-grid",
      start: '20% bottom',
      // markers: true
      },
    y: 200,
    opacity: 0,
    ease: "easeInSine",
    duration: 1.3,
  })

  const footerlinks = document.querySelectorAll('.footer-link-group');

    gsap.from(footerlinks, {
      scrollTrigger:{
        trigger:".footer-grid",
        start: '20% bottom',
        // markers: true
      },
      duration: 1,
      delay: 0.7,
      opacity: 0,
      y: 50,
      stagger: 0.2, // Adjust the stagger timing as needed
      ease: 'power2.out'
    });
})

let mm = gsap.matchMedia();

mm.add("(min-width:1160px)",()=>{
  gsap.from(".footer-logo",{
    scrollTrigger: {
      trigger: ".footer-grid",
      start: '30% bottom',
      // markers: true
      },
    y: 200,
    opacity: 0,
    ease: "easeInSine",
    duration: 1.3,
  })

  const footerlinks = document.querySelectorAll('.footer-link-group');

    gsap.from(footerlinks, {
      scrollTrigger:{
        trigger:".footer-grid",
        start: 'center bottom',
        // markers: true
      },
      duration: 1,
      delay: 0.7,
      opacity: 0,
      y: 50,
      stagger: 0.2, // Adjust the stagger timing as needed
      ease: 'power2.out'
    });
})

