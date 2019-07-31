$(document).ready(function () {
    $(".card-parent").on("click",function () {
        var src=$(this).find("img").attr("src");
        $("#productShower").find("img").attr('src',src);
        $("#productShower").show();
        // console.log(src);
    });
    $(".close-shower").on("click",function () {
        $("#productShower").hide().find('img').attr('src','');
    });
    $("#productShower").on("click",function (e) {
        // console.log(e.target.tagName);
        if (e.target.tagName!=="IMG"){
            $("#productShower").hide().find('img').attr('src','');
        }
    })
});
