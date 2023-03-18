function animation(){
    gsap.timeline()
        // .to(".content-body.active", {
        //     display: "flex",
        //     duration: 0
        // })
        .to(".content-body:not(.active)", {
            height: "0vh",
            flexGrow: 0,
            padding: 0,
            // autoAlpha: 0,
            duration: .5,
            ease: "power1.inOut"
        })
        .to(".content-body.active", {
            height: 100,
            flexGrow: 1,
            padding: "32px 24px 24px",
            autoAlpha: 100,
            duration: 0,
            ease: "power1.inOut"
        }, "<")
        // .to(".content-body:not(.active)", {
        //     display: "none",
        //     duration: 0
        // })
}

function addTabNavigation(){
    $(`.tab`).on("click", function(e){
        $(`.tab`).removeClass('active').parent().removeClass('bg-gray');
        $(`.tab[data-tab="${$(this).data("tab")}"]`).addClass('active').parent().addClass('bg-gray');
        $(`#tab-container .content-body`).removeClass('active');
        $(`#${$(this).data("id")}`).addClass('active');
        const activeContent =  $(`#${$(this).data("id")}`)[0];
        animation();    
        // console.log(`#${$(this).data("id")}`)
    });
};

addTabNavigation();
animation();
