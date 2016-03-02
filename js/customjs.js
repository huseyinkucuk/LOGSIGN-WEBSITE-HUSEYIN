
/* ------------------------------- NAV BAR MOBİLE ---------------------------------- */

$( ".mnavrightbutton" ).click(function() {
  $( ".mnavlistdiv" ).slideToggle( "slow" );
});

/* --------------------------- MAIN SLIDER --------------------------- */

var _slidesayisi = $(".slider").length;
var _slideuzunluk = $('.slider').height();

$(function () {
// add button
	for(var i=0;i<_slidesayisi;i++)
	{
		var buttonHtml="<button class='slideraltbutton' onclick='goTo("+i+")'></button>";
		$(".slideraltbuttonposition").append(buttonHtml);
	}

	    $('.slideraltbutton:eq('+ 0 +')').attr('disabled',true);
	    $('.slideraltbutton:eq('+ 0 +')').css('backgroundColor','#00AEF3');


});
// slide when clicked
goTo = function ( slideNumber )
{

    $('.slidermain').stop().animate({top : "-" + slideNumber * _slideuzunluk + "px"});


	$('.slideraltbutton').attr('disabled',false);
	$('.slideraltbutton').css('backgroundColor','white');

    $('.slideraltbutton:eq('+slideNumber+')').attr('disabled',true);
    $('.slideraltbutton:eq('+slideNumber+')').css('backgroundColor','#00AEF3');
   
}

/* ------------------------------   ALT SLIDER ---------------------------------------- */

var _slidealtsayisi = $(".altslide").length;
var _slidealtuzunluk = $(".altslide").width();

$(function () {
// add button
	for(var i=0;i<_slidealtsayisi;i++)
	{
		var buttonHtm="<button class='sliderbottomtbutton' onclick='gothere("+i+")'></button>";
		$("#altbutonarea").append(buttonHtm);
	}

	    $('.sliderbottomtbutton:eq('+ 0 +')').attr('disabled',true);
	    $('.sliderbottomtbutton:eq('+ 0 +')').css('backgroundColor','#00AEF3');


});
// slide when clicked
gothere = function ( slideNumberr )
{

    $('.altslidermain').stop().animate({left : "-" + slideNumberr * _slidealtuzunluk + "px"});


	$('.sliderbottomtbutton').attr('disabled',false);
	$('.sliderbottomtbutton').css('backgroundColor','#DEDEDE');

    $('.sliderbottomtbutton:eq('+slideNumberr+')').attr('disabled',true);
    $('.sliderbottomtbutton:eq('+slideNumberr+')').css('backgroundColor','#00AEF3');
    
}


