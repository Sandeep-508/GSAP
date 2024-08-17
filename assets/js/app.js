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

tl.from(".text1", {
    y: -40,
    duration: 0.5,
});
tl.from("a", {
    y: -40,
    duration: 0.5,
    stagger: 0.3,
});
tl.from(".centerText", {
    opacity: 0,
});
tl.to(".scrollText", {
    x: -2300,
    scrollTrigger: {
        trigger: ".scrollText",
        start: "2% 0%",
        end: "bottom 0%",
        scrub: true,
        pin: true,
    }
});
