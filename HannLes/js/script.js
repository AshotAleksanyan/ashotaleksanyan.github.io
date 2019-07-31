$(document).ready(function () {

    function errorMessage(tag,message){
        $(tag).css('color','red').text(message);
        setTimeout(function () {
            $(tag).html('');
        },3500);
    }
    $("#search_global").on("click",function () {
        $(this).toggleClass("fa-times");
        if($(this).hasClass('fa-times')){
            $("#search_input").animate({left: '0'},1000);
        }else{
            $("#search_input").animate({left: '110%'},1000);
        }
    });
    var date=new Date().getFullYear();
    var start = date-6;
    for (var i=start;i>date-100;i--){
        $('#feedbackAge').append("<option value='"+i+"'>"+i+"</option>")
    };

    //form validation//
    var fullName=/^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{2}[a-zA-Z0-9]{2,}|[a-zA-Z0-9]+\s{2}[a-zA-Z0-9]{3,}\s{2}[a-zA-Z0-9]{2,})/;
    var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers=/^[0-9]*$/;
    var bool =true;
    $("#feedbackForm").on("submit",function (e) {
        e.preventDefault();
        if (! fullName.test($("#fname").val())){
          errorMessage($('.resultMessageFullName'),'Please write a correct full name');
          bool=false;
        }
        if (! email.test($("#email").val())){
            errorMessage($(".resultMessageEmail"),"Please write a correct email")
            bool=false;
        }
        if (!numbers.test($("#feedbackAge").val())){
            errorMessage($(".resultMessageAge"),"Please write a correct year")
            bool=false;
        }
        if ($("#subject").val()==="" || $("#subject").val()===" "){
            errorMessage($(".resultMessageSubject"),"Please write more then two corect")
            bool=false;
        }
        if (bool){
            $(".ok").css('color','green').text("Thank You for your feedback");
            setTimeout(function () {
                $(".ok").html('');
            },3500);
            $(this)[0].reset();
        }
    });
});

