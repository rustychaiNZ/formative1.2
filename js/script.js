$(document).ready(function(){

	// Opens the hamburger menu
	$('#menu').click(function(){
		$('nav').fadeToggle('active');
	})

	//Button that allows you to close the hamburger menu
	$('#close, li').click(function(){
		$('nav').fadeOut(500);
	})

	// Closes the hamburger menu
	$('nav').mouseleave(function(){
		$('nav').fadeOut(500);
	})

	// Closes the hamburger menu by selecting an item
	// $('navItem').click(function(){
	// 	$('nav').fadeOut(500);
	// })

});