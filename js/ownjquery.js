//My own jQuery

//Hamburger menu toggle function
var menu = function() {
$("#hamburger").click(function(){
	$(".dropdown-menu").toggle("slow");
});

$("li a").click(function(){
	$(".dropdown-menu").toggle("slow");
});

};

//Form input-checking function
var formSubmit = function() {
	$("form").submit(function(){
		var firstName = $("#firstname").val();

		if(firstName === "") {
			$(".firstname-error").text("Please enter your first name.")
		};

		return false;
	});

	$("form").submit(function(){
		var lastName = $("#lastname").val();

		if(lastName === "") {
			$(".lastname-error").text("Please enter your last name.")
		};

		return false;
	});

	$("form").submit(function(){
		var email = $("#email").val();

		if(email === "") {
			$(".email-error").text("Please enter your email.")
		};

		return false;
	});
};

$(document).ready(menu);
$(document).ready(formSubmit);