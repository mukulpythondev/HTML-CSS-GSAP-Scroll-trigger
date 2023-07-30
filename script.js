var t=gsap.timeline()
t.from('nav',{
    opacity:0,
    delay:0.5
})
t.from('#nav h1,#nav h4,#nav h3',{
    y:-80,
    opacity:0,
    duration:1,
    stagger:0.3
})
t.from('#left h1',{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.4
     
})
t.from('#right img',{
    scale:0.5,
    opacity:0,
    duration:0.5
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:'body' }
        
})