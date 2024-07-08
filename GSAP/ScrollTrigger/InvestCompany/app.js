gsap.from(".logo div", {
    opacity: 0,
    delay: 1,
    x: 20,
});

const menu_items = document.querySelectorAll(".menu-items li");
gsap.from(menu_items, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1.5,
    stagger: {
        amount: 0.8,
    },
});

//ta co the document quryAll title roi forEach cx dc
gsap.utils.toArray(".title").forEach((title) => {
    gsap.fromTo(
        title,
        {
            letterSpacing: "10px",
            opacity: 0,
            skewX: 65,
            x: 300,
        },
        {
            letterSpacing: 0,
            opacity: 1,
            skewX: 0,
            x: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: title,
                scroller: "body",
            },
        }
    );
});
gsap.utils.toArray(".p").forEach((p) => {
    gsap.fromTo(
        p,
        {
            letterSpacing: "10px",
            opacity: 0,
            skewX: 30,
            x: 300,
        },
        {
            letterSpacing: 0,
            opacity: 1,
            skewX: 0,
            x: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: p,
                scroller: "body",
            },
        }
    );
});

gsap.utils.toArray("button").forEach((button) => {
    gsap.fromTo(
        button,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: button,
                scroller: "body",
            },
        }
    );
});

gsap.utils.toArray(".line").forEach((line) => {
    gsap.fromTo(
        line,
        {
            width: "0%",
        },
        {
            width: "100%",
            duration: 1,
            delay: 0.5,
            scrollTrigger: line,
        }
    );
});

gsap.from(".gold1", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    delay: 0.5,
});

gsap.fromTo(
    ".gold2",
    {
        scale: 0.2,
        opacity: 0,
        skewY: 30,
    },
    {
        scale: 1,
        opacity: 1,
        skewY: 0,
        duration: 3,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".gold2",
            scroller: "body",
        },
    }
);

gsap.utils.toArray('.rotation').forEach(rotate=>{
    gsap.fromTo(rotate,{
        opacity:0,
        rotation:350,
        scale:.2
    },{
        opacity:1,
        rotation:0,
        scale:1,
        duration:1,
        delay:1,
        scrollTrigger:rotate

    })
})