//Button effect - change colour when mouse moves over it
var button = document.querySelector("#button");

button.addEventListener("mouseenter", function(){
	this.style.color = "#9FD8CB";
	this.style.background = "#2d3319";
	this.style.border = "2px solid #d6e5e3";
});

button.addEventListener("mouseleave", function(){
	this.style.color = "#517664";
	this.style.background = "#d6e5e3";
	this.style.border = "2px solid #2d3319";
})

//Image effect - possibly change/add text?
var imageOne = document.querySelector(".one");
var imageTwo = document.querySelector(".two");
var imageThree = document.querySelector(".three");

imageOne.addEventListener("mouseenter", function(){
	this.style.opacity = "0.3";
});

imageOne.addEventListener("mouseleave", function(){
	this.style.opacity = "1";
});

imageTwo.addEventListener("mouseenter", function(){
	this.style.opacity = "0.3";
	bristol.textContent;
});

imageTwo.addEventListener("mouseleave", function(){
	this.style.opacity = "1";
});

imageThree.addEventListener("mouseenter", function(){
	this.style.opacity = "0.3";
	london.textContent;
});

imageThree.addEventListener("mouseleave", function(){
	this.style.opacity = "1";
});

