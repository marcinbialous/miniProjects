$(document).ready(function () {
	

$("#arrow").on("click", function () {
	$("body, html").animate({
		scrollTop : $("main").offset().top
	}, 1000)
})
	
})

//var arrow=document.getElementById("arrow")
//arrow.addEventListener("click",function{
// });