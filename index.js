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


      gsap.from(".overlay-img",{
        x:1000,
        duration:3,
        delay:0.4,
        ease:"sine.in"
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

//about us content animation
gsap.from(".about-us-content p",{
    scrollTrigger: {
    trigger: ".about-us-content",
    start: 'bottom bottom',
    end:"center center",
    // markers:true,
    },
    y:-10,
    opacity:0,
    ease: "easeInSine",
    //delay: 0.4,
    duration: 1
})

//logo animation
gsap.from(".discover-logo",{
  scrollTrigger: {
  trigger: ".about-us-content",
  start: '-30% bottom',
  end:"bottom center",
  // markers:true,
  },
  y:-30,
  opacity:0,
  ease: "easeInSine",
  //delay: 0.4,
  duration: 1
})


//counter animation
gsap.from(".analytics-row", {
  scrollTrigger: {
  trigger: ".analytics-row",
  start: '20% bottom',
  },
  opacity: 0,
  y: 50,
  ease: "easeInSine",
  duration: 1,
  onStart: ()=>{
    const counters = document.querySelectorAll('.analytics-num');

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-percentage');
        let count = +counter.innerText.replace("+", "");
        const increment = target / 100;

        if (count < target) {
          counter.childNodes[0].nodeValue = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.childNodes[0].nodeValue = target;
        }
      };

      updateCount();
    });
  }
});


//the leadership title
gsap.from(".the-team-title",{
  scrollTrigger: {
    trigger: ".title-heading",
    start: '20% bottom',
    },
  opacity: 0,
  y: 50,
  ease: "easeInSine",
  duration: 1,
})

gsap.from(".title",{
  scrollTrigger: {
    trigger: ".team-title-heading",
    start: '20% bottom',
    },
    ease: "easeInSine",
    duration: 2,
    backgroundSize: "0% 0.05rem",
})

gsap.from(".team-title-heading",{
  scrollTrigger: {
    trigger: ".title-heading",
    start: '20% bottom',
    },
  ease: "easeInSine",
  duration: 1,
  backgroundSize: "0% 0.3rem",
})

//team animation
gsap.from(".the-team-highlight-left-bg",{
  scrollTrigger: {
    trigger: ".the-team-highlight",
    start: 'top bottom',
    },
  left: 370,
  ease: "easeInSine",
  duration: 2,
})

gsap.from(".the-team-highlight-text",{
  scrollTrigger: {
    trigger: ".the-team-highlight",
    start: 'top bottom'
    },
  opacity: 0,
  ease: "easeInSine",
  duration: 1,
  delay: .5
})

// service title
gsap.from(".services-title",{
  scrollTrigger: {
    trigger: ".services-title",
    start: '20% bottom',
    // markers: true
    },
  opacity: 0,
  y: 50,
  ease: "easeInSine",
  duration: 1,
  onStart: ()=>{
    gsap.from(".services-title",{
        ease: "easeInSine",
        duration: 2,
        backgroundSize: "0% 0.05rem",
    })
    
    gsap.from(".services-title-heading",{
      ease: "easeInSine",
      duration: 1,
      backgroundSize: "0% 0.3rem",
    })
  }
})

// service cards animation
const cards = document.querySelectorAll('.services-card');

    gsap.from(cards, {
      scrollTrigger:{
        trigger:".services-offered",
        start: 'center bottom',
        // markers: true
      },
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2, // Adjust the stagger timing as needed
      ease: 'power2.out'
    });


// footer animation
gsap.from(".subscribe-widget",{
  scrollTrigger: {
    trigger: ".subscribe-widget",
    start: 'top bottom',
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
  duration: 2,
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
        start: '30% bottom',
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