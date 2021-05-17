import gsap from "gsap";
import "./styles/style.css";
import "./nav";
import "./script"
import "/static/black-clover-pub-video.mp4";
import "/static/github.svg";
import "/static/html-logo.png";
import "/static/css-logo.png";
import "/static/js-logo.png";
import "/static/react-logo.png";
import "/static/gsap-logo.png";
import "/static/node-logo.png";
import "/static/knex-icon.png";
import "/static/python-logo.png";
import "/static/postgres-logo.png";
import "/static/me.png";
import "/static/linkedin.svg";
import "/static/grape-smoke.mp4";
import "/static/purpleborder.png";
import "/static/new-logo-color.png";
import "/static/richardlovelace-portfolio.mp4";
import "/static/star.png";

var mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 800px)"),
  window.matchMedia("(min-width: 600px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 280px)"),
];
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
window.onload = function () {
  function mediaqueryresponse(mql) {
    let tl = gsap.timeline({ repeat: -1 });
    let tl2 = gsap.timeline({ repeat: 0, delay: 0.5 });
    let tl3 = gsap.timeline({ repeat: 0 });
    let tl4 = gsap.timeline({ repeat: 0 });
    let tl5 = gsap.timeline({ repeat: 0 });

    let letters = document.querySelectorAll(".letter");

    tl3
      .set(
        ".content",
        { xPercent: 10,
          filter: "brightness(105%)",
          opacity: 1,
        },
        "-=1"
      )
      .to(
        ".content",
        {
          duration: 10,
        },
        "-=2"
      );
    tl2
      .set(letters, {
        visibility: "visible",
        opacity: 0,
      })
      .to(
        letters,
        {
          duration: 2,
          opacity: 1,
          filter: "brightness(105%)",
        },
        "+=0.1"
      )
      .to(
        letters,
        {
          filter: "brightness(0%)",
          stagger: {
            from: "edges",
            each: 0.04,
            repeat: 7,
            yoyo: true,
          },
        },
        "-=0.5"
      )
      .to(letters, {
        filter: "brightness(100%)",
      });
  }

  // tl.set(".container", {
  //   visibility: "visible",
  //   autoAlpha: 1,

  //   xPercent: -50,
  //   yPercent: -50,
  //   x: "35%",
  //   y: "0%",

  // });

  // if (mqls[0].matches) {

  //   tl.to(".container", {

  //     x: "+=5%",
  //     y: "-=25%",
  //     duration: 20,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=45%",
  //       y: "+=30%",
  //       duration: 45,
  //       ease: "linear",
  //       delay: 9999999999999999999999999999,
  //     })
  //     .to(".container", {
  //       x: "-=45%",
  //       y: "+=20%",
  //       duration: 45,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=45%",
  //       y: "-=20%",
  //       duration: 45,
  //       ease: "linear",
  //     });
  // } else if (mqls[1].matches) {
  //   tl.set(".container", {
  //     x: "+=10%",
  //     delay: 0
  //   });
  //   tl.to(".container", {
  //     x: "+=38%",
  //     y: "-=13%",
  //     duration: 30,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=38%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=38%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=38%",
  //       y: "-=13%",
  //       duration: 30,
  //       ease: "linear",
  //     });

  // } else if (mqls[2].matches) {
  //   tl.set(".container", {

  //     x: "+=10%",
  //   });
  //   tl.to(".container", {
  //     x: "+=34%",
  //     y: "-=13%",
  //     duration: 30,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "-=13%",
  //       duration: 30,
  //       ease: "linear",
  //     });
  // } else if (mqls[3].matches) {
  //   tl.set(".container", {
  //     x: "+=10%",
  //   });
  //   tl.to(".container", {
  //     x: "+=34%",
  //     y: "-=13%",
  //     duration: 30,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "-=13%",
  //       duration: 30,
  //       ease: "linear",
  //     });
  // } else if (mqls[4].matches) {
  //   tl.set(".container", {
  //     x: "+=10%",

  //   });
  //   tl.to(".container", {
  //     x: "+=34%",
  //     y: "-=13%",
  //     duration: 30,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "-=13%",
  //       duration: 30,
  //       ease: "linear",
  //     });
  // } else if (mqls[5].matches) {
  //   tl.set(".container", {
  //     x: "+=15%",

  //   });
  //   tl.to(".container", {

  //     x: "+=34%",
  //     y: "-=13%",
  //     duration: 30,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "-=13%",
  //       duration: 30,
  //       ease: "linear",
  //     });
  // } else if (mqls[6].matches) {
  //   tl.set(".container", {

  //     x: "+=13%",
  //   });
  //   tl.to(".container", {
  //     x: "+=34%",
  //     y: "-=13%",
  //     duration: 30,
  //     ease: "linear",
  //   })
  //     .to(".container", {
  //       x: "+=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "+=13%",
  //       duration: 30,
  //       ease: "linear",
  //     })
  //     .to(".container", {
  //       x: "-=34%",
  //       y: "-=13%",
  //       duration: 30,
  //       ease: "linear",
  //     });
  // }

  for (let i = 0; i < mqls.length; i++) {
    mediaqueryresponse(mqls[i]);
    mqls[i].addEventListener(mediaqueryresponse, {});
  }
};
