gsap.registerPlugin(ScrollTrigger);

  //Parallax Effect
  const heroText = document.querySelector("#hero-section .parallax");
  const heroSection = document.querySelector("#hero-section");
  const people = document.querySelector("#parallax-people");
  const mountains = document.querySelector("#parallax-mountains");
  const snowSmall = document.querySelector("#parallax-snow-small");
  const snow = document.querySelector("#parallax-snow");
  const snow2 = document.querySelector("#parallax-snow-2");
  const snow3 = document.querySelector("#parallax-snow-3");
  
  const scrubTimeLine = gsap.timeline({
    defaults: {
      ease: "none",
      transformOrigin: "50% 50%",
    },
    scrollTrigger: {
      start: "top top",
      trigger: heroSection,
      end: "bottom top",
      scrub: true,
    },
  });
  const movement = -(heroText.offsetHeight * .4);
  scrubTimeLine.to(
    heroText,
    {
      autoAlpha: 0,
      scale: 1.18,
      duration: 0.6,
      y: -movement * -2.5,
    },
    0
  )
  // .to(
  //   people,
  //   {
  //     y: -movement * .5,
  //   },
  //   0
  // )
  .to(
    mountains,
    {
      y: -movement * -.8,
    },
    0
  )
  .to(
    snowSmall,
    {
      x: -100,
      y: -movement * 2.1,
    },
    0
  )
  .to(
    snow,
    {
      x: -100,
      y: -movement * 3.1,
    },
    0
  )
  .to(
    snow2,
    {
      x: -50,
      y: -movement * 6.1,
    },
    0
  )
  .to(
    snow3,
    {
      x: -200,
      y: -movement * 8.1,
    },
    0
  )
  


// window.onload = initHeaderAnimation;

// console.log('first')



// function initHeaderAnimation() {
//   const headerSection = document.querySelector(
//     "header .section.is-width-standard"
//   );
//   headerSection.prepend(addHeaderLogo());

//   const headerSmallSection = document.querySelector(
//     "header .image-element__wrap"
//   );
//   headerSmallSection.prepend(addHeaderSmallLogo());

//   const mobileHeaderLogo = document.querySelector(
//     ".mobile-logo .image-element__wrap"
//   );
//   mobileHeaderLogo.prepend(addMobileHeaderLogo());

//   const heroSection = document.querySelector(".dynamic-sections");

//   ScrollTrigger.matchMedia({
//     "(max-width: 779px)": function () {
//       const mobileTimeLine = gsap.timeline({
//         defaults: {
//           // ease: "none",
//         },
//         scrollTrigger: {
//           trigger: heroSection,
//           start: "2% top",
//           end: "2% top",
//           toggleActions: "play none reverse none",
//           // markers: true
//         },
//       });
//       mobileTimeLine
//         .to(
//           "#mobile-header",
//           {
//             background: `rgba(255,225,225,0)`,
//             duration: 0.001,
//             ease: "none",
//           },
//           "-=0.6"
//         )
//         .to(
//           "#mobile-header",
//           {
//             background: `rgba(177,228,227,1)`,
//             duration: 0.6,
//             ease: "power2.Out",
//           },
//           "-=0"
//         )
//         .from(
//           "#mobile-header",
//           {
//             paddingTop: "10px",
//             duration: 0.6,
//           },
//           "-=1"
//         )
//         .to(
//           ".mobile-header-logo",
//           {
//             duration: 0.6,
//             y: -250,
//           },
//           "-=0.6"
//         )
//         .from(
//           "#mobile-header img",
//           {
//             duration: 0.6,
//             scale: .1,
//             autoAlpha: 0,
//           },
//           "+=0"
//         );
//     },

//     "(min-width: 800px)": function () {
//       const desktopTimeLine = gsap.timeline({
//         defaults: {
//         },
//         scrollTrigger: {
//           trigger: heroSection,
//           start: "2% top",
//           end: "2% top",
//           toggleActions: "play none reverse none",
//         },
//       });
//       desktopTimeLine
//         .to(
//           "#header",
//           {
//             y: -200,
//             duration: 0.6,
//           },
//           "-=0.6"
//         )
//         .to(
//           "#header",
//           {
//             background: `rgba(255,225,225,0)`,
//             duration: 0.001,
//             ease: "none",
//           },
//           "-=0.6"
//         )
//         .to(
//           "#header",
//           {
//             background: `rgba(177,228,227,1)`,
//             duration: 0.6,
//             ease: "power2.Out",
//           },
//           "-=0"
//         )
//         .from(
//           "#header .header-small-logo",
//           {
//             autoAlpha: 0,
//             width: 0,
//             height: 0,
//             duration: 0.6,
//             ease: "power2.Out",
//           },
//           "-=0.6"
//         )
//         .to(
//           "#header .header-logo",
//           {
//             autoAlpha: 0,
//             y: -100,
//             duration: 0.6,
//             ease: "power2.Out",
//           },
//           "-=0.6"
//         );
//     },

//     all: function () {
//       const captionTimeLine = gsap.timeline({
//         defaults: {},
//         scrollTrigger: {
//           trigger: heroSection,
//           start: "2% top",
//           end: "2% top",
//           toggleActions: "play none reverse none",
//         },
//       });
//       captionTimeLine
//         .from("#shopify-section-announcement-bar", {
//           y: -30,
//           duration: 0.01,
//         })
//         .from(
//           ".flickity-viewport .caption-content",
//           {
//             y: -200,
//             autoAlpha: 0,
//             ease: "power2.Out",
//           },
//           "-=0.6"
//         );
//     },
//   });

//   //Parallax Effect
//   const heroPicture = document.querySelector(
//     ".flickity-viewport .image-element__wrap"
//   );
//   const scrubTimeLine = gsap.timeline({
//     defaults: {
//       ease: "none",
//       transformOrigin: "50% 50%",
//     },
//     scrollTrigger: {
//       trigger: heroPicture,
//       start: "top top",
//       // endTrigger: "#Services",
//       end: "bottom top",
//       scrub: true,
//     },
//   });
//   const movement = -(heroPicture.offsetHeight * 0.4);
//   scrubTimeLine.to(
//     heroPicture,
//     {
//       y: -movement,
//     },
//     0
//   );
  
// } //***from init***

// function addHeaderLogo() {
//   const headerLogo = document.createElement("div");
//   headerLogo.className = "header-logo";
//   const headerLogoContainer = document.createElement("div");
//   headerLogoContainer.className = "header-logo-container";
//   headerLogoContainer.appendChild(headerLogo);
//   return headerLogoContainer;
// }

// function addHeaderSmallLogo() {
//   const headerSmallLogo = document.createElement("div");
//   headerSmallLogo.className = "header-small-logo";
//   return headerSmallLogo;
// }

// function addMobileHeaderLogo() {
//   const mobileHeaderLogo = document.createElement("div");
//   mobileHeaderLogo.className = "mobile-header-logo";
//   return mobileHeaderLogo;
// }