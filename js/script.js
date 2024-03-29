$(document).ready(function(){

// Navigation----------
	// Opens the hamburger menu
	$('#menu').click(function(){
		$('#nav').fadeToggle('active');
	})
	//Buttons that allows you to close the hamburger menu
	$('#close, .navItem').click(function(){
		$('#nav').fadeOut(500);
	})
	// Closes the hamburger menu
	$('nav').mouseleave(function(){
		$('#nav').fadeOut(500);
	})

// Food Menu-------------
	// Opens menu
	$('#breakfast').click(function(){
		$('#breakfastMenu').slideToggle('500, active');
	})
	// Closes Menu
	$('#closeBreakfast').click(function(){
		$('#breakfastMenu').slideToggle(500);
	})

	$('#pizza').click(function(){
		$('#pizzaMenu').slideToggle('500, active');
	})
	$('#closePizza').click(function(){
		$('#pizzaMenu').slideUp(500);
	})

	$('#lightMeal').click(function(){
		$('#lightMealMenu').slideToggle('500, active');
	})
	$('#closeLightMealMenu').click(function(){
		$('#lightMealMenu').slideUp(500);
	})

	$('#allDaySnack').click(function(){
		$('#allDaySnackMenu').slideToggle('500, active');
	})
	$('#closeAllDaySnack').click(function(){
		$('#allDaySnackMenu').slideUp(500);
	})

// Drink Menu----------------------
	// Opens Menu
	$('#beer').click(function(){
		$('#beerMenu').slideToggle('500, active');
	})
	// Closes Menu
	$('#closeBeer').click(function(){
		$('#beerMenu').slideUp(500);
	})

	$('#wine').click(function(){
		$('#wineMenu').slideToggle('500, active');
	})
	
	$('#closeWine').click(function(){
		$('#wineMenu').slideUp(500);
	})

	$('#non-alcoholic').click(function(){
		$('#non-alcoholicMenu').slideToggle('500, active');
	})
	
	$('#closeNon-alcoholic').click(function(){
		$('#non-alcoholicMenu').slideUp(500);
	})

});

// Scroll to top---------
// Declears 'scroll function' variable
window.onscroll = function() {scrollFunction()};

// first function, when the document is scrolled down by 180px, reveal the 'back to top function'. If the window hasn't been scrolled down by at least 180px, no button will be displayed
function scrollFunction() {
	if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
		document.getElementById("bkToTop").style.display = "block";
	} else {
		document.getElementById("bkToTop").style.display = "none";
  	}
}

// This function is related to when the user clicks the buttom. It will take the user straight back up to the top
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}