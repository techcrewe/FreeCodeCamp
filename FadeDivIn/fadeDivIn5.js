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

// $(".text").css("top", $(".title").height() + 10);

// $(document).ready(function() {
//   $(".text").css("top", $(".title").height() + 10);


// });

// $(window).on("resize", function() { //Make it responsive
//   $(".text").css("top", $(".title").height() + 10);
// });

// //Determine text's visibility on how far it is from the top compared to how far along you've scrolled.  Using visibility is important because it maintains text's height
// $(document).on("scroll", function() {
//   var textPos = $(".text").offset().top;
//   var bodyScroll = $("body").scrollTop() || $("html").scrollTop();
//   var textHeight = $(".text").height();
  
//   if (textPos - bodyScroll < textHeight) {
//     $(".text").css("visibility", "hidden");
//     return;
//   }
  
//   if (textPos - bodyScroll >= textHeight) {
//     $(".text").css("visibility", "");
//     return;
//   }
// });


/* THIS WORKS - DO NOT DELETE*/
// Position Text below Image div
$(document).ready(function() {
  $(".text").css("top", $(".title").height() + 10);

});

$(window).on("resize", function() { //Make it responsive
  $(".text").css("top", $(".title").height() + 10);
});

// Declare variables for top of each text div 
$(window).scroll(function () {
    var bodyScroll = $("body").scrolltop() || $("html").scrollTop();
    var topText1 = $(("title-wrapper").height() + 10);
    var topText2 = topText1 + $("#text1");
    var topText3 = topText2 + $("#text2");

    if (bodyScroll < (topText2)) {
        $("#text1").fadeIn(slow);
        $("#text2").fadeOut(1000);
        $("#text3").fadeOut(1000);
    }

    if ((bodyScroll > topText2) && (bodyScroll < topText3)) {
        $("#text2").fadeToggle(slow);
        $("#text1").fadeToggle(slow);
    }

    if (bodyScroll > topText3) {
        $("#text2").fadeToggle(slow);
        $("#text3").fadeToggle(slow);
    }


)};


// $(window).on("load",function() {
//   function fade(pageLoad) {
//   	var windowBottom = $(window).scrollTop() + $(window).innerHeight();
//     var min = 0;
//     var max = 1;
//     var threshold = 0.01;
    
//     $(".fade").each(function() {
//       /* Check the location of each desired element */
//       var objectBottom = $(this).offset().top + $(this).outerHeight();
      
//       /* If the element is completely within bounds of the window, fade it in */
//       if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//         if ($(this).css("opacity")<=min+threshold || pageLoad) {$(this).fadeTo(200,max);}
//       } else { //object goes out of view (scrolling up)
//         if ($(this).css("opacity")>=max-threshold || pageLoad) {$(this).fadeTo(200,min);}
//       }
//     });
//   } fade(true); //fade elements on page-load
//   $(window).scroll(function(){fade(false);}); //fade elements on scroll
// });
/* ------------- */

