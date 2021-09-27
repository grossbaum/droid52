var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-100px";
}

gsap.registerPlugin(TextPlugin);


gsap.registerPlugin(ScrollTrigger);



gsap.from('.intro', {duration: 2, y: '-100%', ease: 'bounce'});

/* const words = ["Jesse.", "A Father.", "A Husband.", "A Developer."]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
}) */


$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6,
        rtl:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
  });