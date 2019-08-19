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

// Food Menu-------------
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

// Drink Menu----------------------
	// Opens Menu
	$('#beer').click(function(){
		$('#beerMenu').slideDown('500, active');
	})
	// Closes Menu
	$('#closeBeer').click(function(){
		$('#beerMenu').slideUp(500);
	})

	$('#wine').click(function(){
		$('#wineMenu').slideDown('500, active');
	})
	
	$('#closeWine').click(function(){
		$('#wineMenu').slideUp(500);
	})

	$('#non-alcoholic').click(function(){
		$('#non-alcoholicMenu').slideDown('500, active');
	})
	
	$('#closeNon-alcoholic').click(function(){
		$('#non-alcoholicMenu').slideUp(500);
	})


});