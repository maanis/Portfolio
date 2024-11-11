var tl = gsap.timeline()

tl.from('.heading',{
    y:45,
    delay:.8,
    opacity:0,
    duration:.3
})
tl.from('.sec-a',{
    x:-85,
    opacity:0,
    duration:.6
})
tl.from('.sec-b-images',{
    // x:85,
    opacity:0,
    duration:1.3
})
gsap.from('.sec-aa',{
    x:-45,
    opacity:0,
    // duration:.6,
    scrollTrigger:{
        trigger:".sec-aa",
        scroller:"body",
        markers:true,
        start:"top 70%",
        // scrub:1
    }
})
gsap.from('.sec-bb',{
    x:-45,
    opacity:0,
    // duration:.6,
    scrollTrigger:{
        trigger:".sec-bb",
        scroller:"body",
        markers:true,
        start:"top 70%",
        // scrub:1
    }
})
