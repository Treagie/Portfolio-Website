//Button effect - change colour when mouse moves over it
var button = document.querySelector("#hello");

button.addEventListener("mouseover", function(){
	this.classList.add("dark")
});

button.addEventListener("mouseleave", function(){
	this.classList.remove("dark")
});


//Image effect - possibly change/add text?
var imageEffect = document.querySelectorAll(".photo-grid img");

for(var i = 0; i < imageEffect.length; i++) {
	imageEffect[i].addEventListener("mouseenter", function(){
		this.classList.add("enter");
	});
	imageEffect[i].addEventListener("mouseleave", function(){
		this.classList.remove("enter");
	});
}

// OLD CODE BELOW THIS POINT - REPLACED BY THE CODE ABOVE :)

//var button = document.querySelector("#hello");

//button.addEventListener("mouseover", function(){
//	this.style.color = "#9FD8CB";
//	this.style.background = "#2D3319";
//	this.style.border = "2px solid #D6E5E3";
//});

//button.addEventListener("mouseleave", function(){
//	this.style.color = "#517664";
//	this.style.background = "#d6e5e3";
//	this.style.border = "2px solid #2d3319";
//})



//var imageOne = document.querySelector(".one");
//var imageTwo = document.querySelector(".two");
//var imageThree = document.querySelector(".three");



//imageOne.addEventListener("mouseenter", function(){
//	this.style.opacity = "0.3";
//});
//
//imageOne.addEventListener("mouseleave", function(){
//	this.style.opacity = "1";
//});
//
//imageTwo.addEventListener("mouseenter", function(){
//	this.style.opacity = "0.3";
//	bristol.textContent;
//});
//
//imageTwo.addEventListener("mouseleave", function(){
//	this.style.opacity = "1";
//});
//
//imageThree.addEventListener("mouseenter", function(){
//	this.style.opacity = "0.3";
//	london.textContent;
//});
//
//imageThree.addEventListener("mouseleave", function(){
//	this.style.opacity = "1";
//});

