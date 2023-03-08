function addTabNavigation(){
    $(`.tab`).click(function(e){
        $(`.tab`).removeClass('active');
        $(this).addClass('active');
        $(`#tab-container .content-body`).removeClass('active');
        $(`#${$(this).data("id")}`).addClass('active');
        console.log(`#${$(this).data("id")}`)
    });
};

addTabNavigation();