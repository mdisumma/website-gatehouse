const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");

const buttons = document.querySelector("header");
console.log(buttons);
buttons.addEventListener("click", (e) => {
	doorLeft.classList.toggle("left");
	doorRight.classList.toggle("right");
	console.log(e);
});
