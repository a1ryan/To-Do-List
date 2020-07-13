$("ul").on("click" , "li" , function(){
   $(this).toggleClass("completed");
})
//difference between using "click" and on("click") is that click works only on the single method while on(click) will works on multiple methods of same type
$("ul").on("click" , "span" , function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text' ").keypress(function(event){
    if(event.which === 13){ // 13 is the code for enter key
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todo + "</li>"); //append is used to add any new line in the list using input
    }
}); 
$(".fa-plus").click(function(){
    $("input[type='text' ").fadeToggle();
});