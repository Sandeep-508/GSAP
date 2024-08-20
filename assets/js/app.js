// Box animations
gsap.fromTo(".box",
    { xPercent: 0, delay: 3 },
    { xPercent: 640, duration: 2, color: "white", repeat: -1, yoyo: true, rotate: 360, backgroundColor: "yellow", ease: "power1.in", yPercent: 250 }
);

gsap.fromTo(".box2",
    { xPercent: 660, delay: 3, yPercent: 0 },
    { xPercent: 0, yPercent: 250, duration: 2, color: "white", repeat: -1, yoyo: true, ease: "power1.in", rotate: 360, backgroundColor: "blue" }
);

// Timeline animations
gsap.registerPlugin(ScrollTrigger)
var tl = gsap.timeline();
var ol = gsap.timeline();

tl.from(".text1", {
    y: -40,
    duration: 0.5,
});

var menuicon = document.querySelector(".menuicon")
var cross = document.querySelector(".cross")
var maxLgView = document.querySelector(".maxLgView")
ol.pause();
ol.to(".maxLgView", {
    right: 0,
    duration: 0.9,
})
ol.from("a", {
    x: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
});
ol.from(".cross", {
    opacity: 0,
})
menuicon.addEventListener("click", () => {
    ol.play()
})
cross.addEventListener("click", () => {
    ol.reverse()
})
let bookmark = document.querySelectorAll(".bookmark")
bookmark.forEach((obj) => {
    obj.addEventListener("click", () => {
        ol.timeScale(4).reverse().then(() => {
            ol.timeScale(1).reverse();
        })
    })
})
tl.from(".centerText", {
    delay: 2,
    opacity: 0,
});
tl.from(".centerText2", {
    delay: 2,
    opacity: 0,
});
tl.to(".scrollText", {
    x: -2300,
    scrollTrigger: {
        trigger: ".parentPin",
        start: "top 0%",
        end: "top -100%",
        // markers: true,
        scrub: true,
        pin: true,
    }
});
