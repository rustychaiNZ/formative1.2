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
	$('#closeBreakfast').click(function(){
		$('#breakfastMenu').slideUp(500);
	})

	$('#pizza').click(function(){
		$('#pizzaMenu').slideDown('500, active');
	})
	$('#closePizza').click(function(){
		$('#pizzaMenu').slideUp(500);
	})

	$('#lightMeal').click(function(){
		$('#lightMealMenu').slideDown('500, active');
	})
	$('#closeLightMealMenu').click(function(){
		$('#lightMealMenu').slideUp(500);
	})

	$('#allDaySnack').click(function(){
		$('#allDaySnackMenu').slideDown('500, active');
	})
	$('#closeAllDaySnack').click(function(){
		$('#allDaySnackMenu').slideUp(500);
	})

});