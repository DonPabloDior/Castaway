gsap.registerPlugin(ScrollTrigger);


const logo = document.querySelector(".Logo");
const nav_item_one = document.querySelectorAll(".one");
const nav_item_two = document.querySelectorAll(".two");
const nav_item_three = document.querySelectorAll(".three");
const nav_item_four = document.querySelectorAll(".four");
const hero_img = document.querySelectorAll(".hero_img");
const hero_title = document.querySelectorAll(".hero-title");
const line = document.querySelectorAll(".line");
const icons_wrap = document.querySelectorAll(".listen-icons");
const episodes_wrap_first_text_btn = document.querySelectorAll(".episodes-wrap-first-text-btn");
const episodes_not_all_container = document.querySelectorAll(".episodes-not-all-container");
const host_info = document.querySelectorAll(".host-info");
const jacob = document.querySelectorAll(".jacob");
const subscribe_container = document.querySelectorAll(".subscribe-container");
const reviews_grid = document.querySelectorAll(".reviews-item");
const listenON = document.querySelectorAll(".listenON");
const second = document.querySelectorAll(".second");
const third = document.querySelectorAll(".third");





const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.episodes-container', // Element that triggers the animation
      start: 'top center', // Start of the trigger
      end: 'bottom center', // End of the trigger
    },
  });
const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.host-container', // Element that triggers the animation
      start: 'top center', // Start of the trigger
      end: 'bottom center', // End of the trigger
    },
  });
const timeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.news-container', // Element that triggers the animation
      start: 'top center', // Start of the trigger
      end: 'bottom center', // End of the trigger
    },
  });
const timeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.reviews-container', // Element that triggers the animation
      start: 'top center', // Start of the trigger
      end: 'bottom center', // End of the trigger
    },
  });
const timeline5 = gsap.timeline({
    scrollTrigger: {
      trigger: '.second', // Element that triggers the animation
      start: 'top center', // Start of the trigger
      end: 'bottom center', // End of the trigger
    },
  });
const timeline6 = gsap.timeline({
    scrollTrigger: {
      trigger: '.third', // Element that triggers the animation
      start: 'top center', // Start of the trigger
      end: 'bottom center', // End of the trigger
    },
  });

const tl = gsap.timeline();



tl.from(logo, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2.out" 
})

gsap.from(nav_item_one, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2"
})
gsap.from(nav_item_two, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    delay: 0.1
})
gsap.from(nav_item_three, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    delay: 0.2
})
gsap.from(nav_item_four, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    delay: 0.3
})
gsap.from(hero_img, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    delay: 0.3
})
gsap.from(hero_title, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    stagger: 0.1,
    delay: 0.4
})
gsap.from(icons_wrap, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    stagger: 0.1,
    delay: 0.5
})
gsap.from(listenON, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    delay: 0.5
})
timeline.from(episodes_wrap_first_text_btn, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    stagger: 0.6,
})
timeline.from(episodes_not_all_container, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    delay: -1.2,
    stagger: 1,
})
timeline2.from(host_info, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    stagger: 0.5,
})
timeline2.from(jacob, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    delay: -1.1,
    stagger: 0.5,
})
timeline3.from(subscribe_container, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    stagger: 0.5,
})
timeline4.from(reviews_grid, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    stagger: 0.2,
})
timeline5.from(second, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    stagger: 0.2,
})
timeline6.from(third, {
    duration: 1.5,  // Animation duration in seconds
    opacity: 0,     // Final opacity
    y: 50,         // Final horizontal position
    ease: "power2" ,
    stagger: 0.2,
})




// .reviews-container {
// }
// .reviews-grid {
// }
// .reviews-item {
// }
// .star-wrap {
// }
// .reviews-title {
// }
// .reviews-subtitle {
// }
