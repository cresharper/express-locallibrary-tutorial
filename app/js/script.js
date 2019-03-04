// scripts
console.log("I'm here!")

$(function(){
    	  // main expansion element
      	$(".expander").click(function() {
      		var subShown = $(this).children(".indented").css("display");

      		if (subShown != "block") {
      			$(this).children(".indented").css("display", "block");
      			$(this).children(".caret").addClass("reversedCaret");
      		} else {
      			$(this).children(".indented").css("display", "none");
      			$(this).children(".caret").removeClass("reversedCaret");
      		}
      	});
        // sub expansion element - .caret class is targeted as well due to issue with clicking on it not registering as a .sub-expander click
        $(".sub-expander, .caret").click(function() {
          var subSelectText = $(".sub-expander").text();
          if (subSelectText != "More") {
            $(".sub-expander").text("More");
          } else {
            $(".sub-expander").text("Show Less");
          }
        });
        // stop propagation on the link element within .expander class
        $(".indented").click(function(event) {
          event.stopPropagation();
        });
    });
