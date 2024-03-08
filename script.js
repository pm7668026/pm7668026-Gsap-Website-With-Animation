gsap.to(".box", {
    width: "100%",
    duration: 2,
    stagger: 2,
    repeat:-1,
    ease: Expo.easeInOut
});


gsap.to(".text h1", {
    duration: 2,
    stagger: 2,
    top: "0%",
    repeat:-1,
    ease: Back.easeOut
});

gsap.to(".text h1", {
    duration: 2,
    delay:2,
    stagger: 2,
    repeat:-1,
    top: "100%"
});


