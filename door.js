const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");
const buttons = document.querySelector("header");

const about = document.querySelector("#about");
const play = document.querySelector("#unity-container");
const support = document.querySelector("#support");

support.style.zIndex = "0";
play.style.zIndex = "0";
about.style.zIndex = "0";

buttons.addEventListener("click", (e) => {
	if (e.target.className === "about") {
		if (doorLeft.classList.length == 2) {
			console.log(doorLeft.classList.length);
			doorControl(e);
		} else {
			support.style.zIndex = "0";
			about.style.zIndex = "5";
			play.style.zIndex = "0";
			doorControl(e);
		}
	}
	if (e.target.className === "play") {
		if (doorLeft.classList.length == 2) {
			console.log(doorLeft.classList.length);
			doorControl(e);
		} else {
			support.style.zIndex = "0";
			about.style.zIndex = "0";
			play.style.zIndex = "5";
			doorControl(e);
		}
	}
	if (e.target.className === "support") {
		if (doorLeft.classList.length == 2) {
			console.log(doorLeft.classList.length);
			doorControl(e);
		} else {
			play.style.zIndex = "0";
			about.style.zIndex = "0";
			support.style.zIndex = "5";
			doorControl(e);
		}
	}
});

function doorControl() {
	doorLeft.classList.toggle("left");
	doorRight.classList.toggle("right");
}
