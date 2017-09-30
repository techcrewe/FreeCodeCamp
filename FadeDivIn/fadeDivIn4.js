// $(window).scroll(function () {
//     console.log($(window).scrollTop());
//     var topDivHeight = $(".topdiv").height();
//     var viewPortSize = $(window).height();
    
//     var triggerAt = 150;
//     var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

//     if ($(window).scrollTop() >= triggerHeight) {
//         $('.fadethisdiv').css('visibility', 'visible').hide().fadeIn();
//         $(this).off('scroll');
//     }
// });

$(".text").css("top", $(".title").height() + 10);

$(window).on("resize", function() { //Make it responsive
  $(".text").css("top", $(".title").height() + 10);
});

//Determine text's visibility on how far it is from the top compared to how far along you've scrolled.  Using visibility is important because it maintains text's height
$(document).on("scroll", function() {
  var textPos = $(".text").offset().top;
  var bodyScroll = $("body").scrollTop() || $("html").scrollTop();
  var textHeight = $(".text").height();
  
  if (textPos - bodyScroll < textHeight) {
    $(".text").css("visibility", "hidden");
    return;
  }
  
  if (textPos - bodyScroll >= textHeight) {
    $(".text").css("visibility", "");
    return;
  }
});