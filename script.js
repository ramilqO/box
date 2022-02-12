let 
width = document.querySelector('.width'),
width_output = document.querySelector('.width_output'),
height = document.querySelector('.height'),
height_output = document.querySelector('.height_output'),
borderRadius = document.querySelector('.border-rad'),
borderRadius_output = document.querySelector('.border-rad_output'),
border = document.querySelector('.border'),
border_output = document.querySelector('.border_output'),

yellow = document.querySelector('.yellow'),
blue = document.querySelector('.blue'),
orange = document.querySelector('.orange'),
black = document.querySelector('.black'),
white = document.querySelector('.white'),
pink = document.querySelector('.pink'),
grey = document.querySelector('.grey'),
red = document.querySelector('.red'),
violet = document.querySelector('.violet'),

body = document.querySelector('body'),
btn = document.querySelector('.btn');

let box = document.querySelector('.box');
box.style.transition = "0.5s";
body.style.transition = "2s";

btn.addEventListener("click", () => {
	body.style.background = "black";
	body.style.color = "white";
	box.style.borderColor = "white";
})


width.addEventListener("input", () => {
	width_output.innerHTML = width.value;
	box.style.width = (width.value * 10) + "px"
})

height.addEventListener("input", () => {
	height_output.innerHTML = height.value;
	box.style.height = (height.value * 5) + "px";
})

borderRadius.addEventListener("input", () => {
	borderRadius_output.innerHTML = borderRadius.value;
	box.style.borderRadius = (borderRadius.value) + "px";
})

border.addEventListener("input", () => {
	border_output.innerHTML = border.value;
	box.style.border = border.value + "px solid black";
	if(body.style.background == "black") {box.style.border = border.value + "px solid white";}
})

//buttons

yellow.addEventListener("click", () => {box.style.background = "yellow";});
red.addEventListener("click", () => {box.style.background = "red";});
grey.addEventListener("click", () => {box.style.background = "grey";});
blue.addEventListener("click", () => {box.style.background = "blue";});
pink.addEventListener("click", () => {box.style.background = "pink";});
black.addEventListener("click", () => {box.style.background = "black";});
green.addEventListener("click", () => {box.style.background = "green";});
