let typed = new Typed('#skills', {
  strings: ['Front-End web-dev', 'Programmer'],
  typeSpeed: 100,
});

gsap.to("nav", {
  backgroundColor: '#18181b',
  height: '8vh',
  duration: 0.7,
  scrollTrigger: {
    trigger: 'nav',
    scroller: 'body',
    start: 'top-10%',
    // end:'top-11%',
    scrub: 0.6
  }
})

// gsap.to("main",{
//   backgroundColor: "rgba(0, 0, 0, 0.45)",
//   scrollTrigger:{
//     trigger:"main",
//     scroller:"body",
//     start:"top-50vh",
//     scrub:1.5
//   }
// })

gsap.to(".inner_main", {
  backgroundColor: "#112136be",
  scrollTrigger: {
    trigger: "body",
    scroller: "body",
    start: "top-1vh",
    scrub: 0.4
  }
})

function show_responsive_nav() {
  let a = document.querySelectorAll(".responsive_nav")[0];
  a.style.display = "block";
  let b = document.getElementsByClassName("nav_menu")[0];
  b.style.display = "none";


}

function close_responsive_nav() {
  let a = document.getElementsByClassName("responsive_nav")[0];
  a.style.display = "none";
  let b = document.getElementsByClassName("nav_menu")[0];
  b.style.display = "block";
}

const prev = document.querySelectorAll(".prev_btn")
// const next = document.querySelectorAll(".next_btn")
const slides = document.querySelectorAll(".project_slider")
const project = document.querySelectorAll(".project")
let counter = 0

project.forEach(
  (slide,i)=>{
    slide.style.left= `${i*100}%`
  }
)

const sliding_next = ()=>{
  if(counter < project.length-1){
    counter++
  }
  else{
    counter = 0
  }
  project.forEach(
    (slide)=>{
      slide.style.transform= `translateX(-${counter*100}%)`
    }
  )
}
const sliding_prev = ()=>{
  if(counter < 1){
    counter = project.length-1
  }
  else{
    counter--
  }
  project.forEach(
    (slide)=>{
      slide.style.transform= `translateX(-${counter*100}%)`
    }
  )
}