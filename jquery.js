$(document).ready(function(){
	
// .addClass function
	$("#button1").click(function(){
		$("#myParagraph1").addClass("red"); 
	})
// .after function
	$("#button2").click(function(){
		$('#myParagraph2').after("<p>This is a new sentence.</p>");
	})
// .append function
	$("#button3").click(function(){
		$("h2, p").append(" is awesome.");
	})
// .attr function - getter
	$("#button4").click(function(){
		var identification1 = $("#myParagraph4").attr("id");
		$("#output1").text(identification1);
	})
// .before function
	$("#button5").click(function(){
		$('#myParagraph5').before("<p>This is a new line.</p>");
	})
// .html function - getter
	$("#button6").click(function(){
		$('#myParagraph6').html("<p>This is a new paragraph!</p>");
	})
// .text function - getter and setter
	$("#button7").click(function(){
		var identification2 = $("#myParagraph7").attr("id");
		$("#output2").text(identification2);
	})
// .val function - getter
	$("input").keyup(function(){
    	var value = $(this).val();
    	$('#myParagraph8').text(value);
	})
// .toggle function
	$("#button9").click(function(){
		$('#myParagraph9').toggle();
	})
// .hide function
	$("#button10").click(function(){
		$('h2').hide("slow");
	})
// .show function
	$("#button11").click(function(){
		$('h2').show("slow");
	})
// .slideDown function
	$("#button12a").click(function(){
		$('#logo12').hide("slow");
	})
	$("#button12b").click(function(){
		$('#logo12').slideDown("slow");
	})
// .slideToggle function
	$("#button13").click(function(){
		$('#logo13').slideToggle("slow");
	})
// .slideUp function
	$(".slideup_btns").click(function(){
		$(this).parent().slideUp("slow", function(){
    		$("#msg").text( $(".slideup_btns", this).text() + " is now hidden.");
		});
	});
// .fadeOut function
	$("#button15").click(function(){
		$('#logo15').fadeOut("slow");
	})
// .fadeIn function - NEED HELP: How do you show img hidden on load?
	$("#button16a").click(function(){
		$('#logo16').hide("slow");
	})
	$("#button16b").click(function(){
		$('#logo16').fadeIn("slow");
	})
// .focus
	$("input").focus(function(){
  		$(this).next("span").css("display", "inline").fadeOut(1000);
	});
// .click
	$("#button18").click(function(){
		$('.para').slideUp("slow");
	});
})