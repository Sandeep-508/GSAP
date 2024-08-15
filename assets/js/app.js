gsap.fromTo(".box", { xPercent: "0", delay: "3" }, { xPercent: "640", duration: "2", color: "white", repeat: -1, yoyo: true, rotate: "360", backgroundColor: "yellow", ease: "power1.easeIn", yPercent: "250" })
gsap.fromTo(".box2", { xPercent: "660", delay: "3", yPercent: "0" }, { xPercent: "0", yPercent: "250", duration: "2", color: "white", repeat: -1, yoyo: true, ease: "power1.easeIn", rotate: "360", backgroundColor: "blue" })

