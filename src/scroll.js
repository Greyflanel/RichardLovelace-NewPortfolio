import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function playVideo(el) {
  let vid = document.getElementById(el);
  vid.play();
  console.log("playing video");
};

// function pauseVideo(el) {
//   let vid = document.getElementById(el);
//   vid.pause();
//   console.log("pausing video");
// };

let timeline = gsap.timeline({
  repeat: 0,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#fourth-section",
    start: "top 15%",
  },
});


function scrollAnimation() {
  
  timeline
    .set(".smoke-vid, .smoke-text", {
      opacity: 0,
    })
    .call(playVideo, ["smokey"])
    .to(".smoke-vid", {
      duration: 3,
      autoAlpha: 0.9,
    })
    .to(
      ".smoke-text",
      {
        delay: 6.8,
        duration: 24,
        autoAlpha: 1,
      },
      "-=6.98"
    )
    .to(
      ".smoke-vid",
      {
        y: 30,
        duration: 3.5,
      },
      "-=25"
    )
    .to(
      ".smoke-vid",
      {
        y: 30,
        duration: 3,
      },
      "-=26"
    )
    .to(
      ".smoke-vid",
      {
        y: 55,
        duration: 3.5,
      },
      "-=26"
    )
    .to(
      ".smoke-vid",
      {
        y: -5,
        duration: 5,
      },
      "-=26.5"
    )
    .to(
      ".smoke-vid",
      {
        y: -5,
        duration: 4.5,
      },
      "-=25"
    )
    .to(
      ".smoke-text",
      {
        y: 55,
        duration: 5.5,
      },
      "-=25.5"
    )
    .to(
      ".smoke-vid",
      {
        autoAlpha: 0,
      },
      "-=20.1"
    )
    .to(
      ".smoke",
      {
        autoAlpha: 0,
      },
      "-=18.8"
    );



    ScrollTrigger.matchMedia({
      
      "(min-width: 1100px)": () => {
        timeline
          .to(
            ".contact-info",
            {
              x: "16vw",
              duration: 4.7,
            },
            "-=20"
          )
          .to(".form-wrapper", { 
            x: "-16vw",
             duration: 4.7,
             }, "-=20")
          .to(
            ".border1, .border2",
            {
              
              autoAlpha: 1,
              duration: 3,
            },
            "-=17.3"
          );
      },
    });
}
 
scrollAnimation();
