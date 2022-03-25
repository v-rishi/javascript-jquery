// double click event hide.
$(document).ready(function () {
    $("#p1").dblclick(function () {
        $(this).hide("slow");
    });
});

$(document).ready(function () {
    $("#p4").dblclick(function () {
        $(this).hide("fast");
    });
});

//$(document).ready(function(){
//  $("p").click(function(){
//    $(this).hide();
//  });
//});

$(document).ready(function () {
    $("#p2").mouseenter(function () {
        alert("Paragraph entered..");
    });
});

//Mouse hover function demo
$(document).ready(function () {
    $('#p3').hover(function () {
        $(this).css("color", "blue")
    }, function () {
        $(this).css("color", "red")
    })
})