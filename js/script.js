$(document).ready(function(){

// Navigation----------
	// Opens the hamburger menu
	$('#menu').click(function(){
		$('nav').fadeToggle('active');
	})
	//Buttons that allows you to close the hamburger menu
	$('#close, li').click(function(){
		$('nav').fadeOut(500);
	})
	// Closes the hamburger menu
	$('nav').mouseleave(function(){
		$('nav').fadeOut(500);
	})

// Menu-------------
	// Opens menu
	$('#breakfast').click(function(){
		$('#breakfastMenu').slideDown('500, active');
	})
	// Closes Menu
	$('#breakfast').click(function(){
		$('#breakfastMenu').slideUp(500);
	})



});