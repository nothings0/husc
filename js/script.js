let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
const backTop = document.querySelector(".back-top")

const counts = document.querySelectorAll('.counter')
const counter_1 = document.querySelectorAll('.counter_1')


menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

counts.forEach((counter) => {
  const speed = 100
  const update = () => {
    const target = Number(counter.getAttribute('data-target'))
    const count = Number(counter.textContent)
    const inc = target / speed
    if(count < target){
      counter.textContent = Math.ceil(inc + count)
      setTimeout(update, 1)
    }
  }
  update()
})
counter_1.forEach((counter) => {
  const speed = 650
  const update = () => {
    const target = Number(counter.getAttribute('data-target'))
    const count = Number(counter.textContent)
    const inc = target / speed
    if(count < target){
      counter.textContent = Math.ceil(inc + count)
      setTimeout(update, 1)
    }
  }
  update()
})


window.onscroll = () =>{

  if(window.scrollY > 60){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
  if(window.scrollY > 100){
    backTop.classList.add('active');
  }else{
    backTop.classList.remove('active');
  }
}

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop:true
});

var swiper = new Swiper(".about-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  loop:true
});

var swiper = new Swiper(".news-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  loop:true
});

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let el_to_show = document.querySelectorAll('.show-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 200

    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop = () => {
    el_to_show.forEach(el => {
        if (isElInViewPort(el)) el.classList.add('show')
        else el.classList.remove('show')
    })

    scroll(loop)
}

loop()

