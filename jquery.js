$(function() {
    $("h1").animate({top: '0px', opacity: '1'}, 2000);
    $("h2").delay(2000).animate({opacity: '1'}, 2000);
    $("#block1").delay(4000).animate({opacity: '1'}, 2000);
})

$(function() {
    $("#depButton").click(function() {
        $("#depButton").hide();
        $("#openAccount").hide();
        $("h1").hide();
        $("h2").hide();
        $("#block2").show();
        $("#block3").show();
    })
})