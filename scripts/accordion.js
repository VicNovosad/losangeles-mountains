// let groups = gsap.utils.toArray(".accordion-item");
// let questions = gsap.utils.toArray(".accordion-tab");
// let questionToggles = groups.map(createAnimation);

// questions.forEach((question) => {
//     question.addEventListener("click", () => toggleQuestion(question));
// });

// function toggleQuestion(clickedQuestion) {
//     // clickedQuestion.querySelector('.icon').classList.toggle("open");
//     questionToggles.forEach((toggleFn) => toggleFn(clickedQuestion));
// }

// function createAnimation(element) {
//     let answer = element.querySelector(".accordion-content");
//     let question = element.querySelector(".accordion-tab");
//     // let minusElement = element.querySelector(".icon.minus");
//     // let plusElement = element.querySelector(".icon.plus");

    
//     gsap.set(answer, { height: "auto" });
//     // gsap.set(answer, { height: "100vh" });
    
//     let isOpen = gsap.getProperty(answer, "height");

//     let animation;
    
//     if(!isOpen){
//         animation = gsap.timeline().to(answer, {
//             height: 0,
//             // width: 0,
//             // autoAlpha: 0,
//             duration: 0.5,
//             ease: "power1.inOut"
//         })
//         .reverse();
//     } else {
//         animation = gsap.timeline().from(answer, {
//             height: 0,
//             // width: 0,
//             // autoAlpha: 0,
//             duration: 0.5,
//             ease: "power1.inOut"
//         })
//         .reverse();
//     }
//     // .to(element, { duration: 0.5, height: "auto" }, 0)
//     // .from(minusElement, { duration: 0.2, autoAlpha: 0, ease:"none" }, 0)
//     // .to(plusElement, { duration: 0.2, autoAlpha: 0, ease:"none" }, 0)

//     return function (clickedQuestion) {
//         if (clickedQuestion === question) {
//             animation.reversed(!animation.reversed());
//         } else {
//             animation.reverse();
//         }
//     };
// }

