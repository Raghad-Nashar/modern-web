
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        duration:2,
        ease: Expo.easeInOut,
        stagger:.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
}

var tiomeout;

function circleChaptaKaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0 ;
    var yprev = 0 ;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(tiomeout);
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
         tiomeout = setTimeout(function(){
            document.querySelector("#mincircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;            
        },100);
    })
}


function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove" , function(dets){
        document.querySelector("#mincircle").style.transform =`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
circleChaptaKaro()
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", function (dets){
        var diff = dets.clientY -elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot*0.2)

        });
    });
});