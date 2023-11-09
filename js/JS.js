$("#start-button").click(function() {
    $(".step-1").toggleClass("row");
    $(".top-of-forms").addClass("row");
    $(".buttons-section").addClass("row");
     $(".start-step").attr("hidden", "true");
});

$("#next-button").click(function(){
    $(".step-1").attr("hidden", "true");
    $(".step-2").addClass("row");
});

$("#next-button").click(function(){
if($(".step-2").hasClass("row")){
    $(".step-2").removeClass("row");
    $(".step-3").addClass("row");
}

});