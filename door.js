const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");
const nav = document.querySelector("nav");

const about = document.querySelector("#about");
const play = document.querySelector("#unity-container");
const support = document.querySelector("#support");

support.style.zIndex = "0";
play.style.zIndex = "0";
about.style.zIndex = "0";

nav.addEventListener("click", (e) => {
	if (e.target.className === "about") {
		if (doorLeft.classList.length == 2) {
			console.log(doorLeft.classList.length);
			doorControl(e);
		} else {
			support.style.zIndex = "0";
			about.style.zIndex = "5";
			play.style.zIndex = "0";
			doorControl(e);
			nav.style.top = "0";
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
			nav.style.top = "0";
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
			nav.style.top = "0";
		}
	}
});

function doorControl() {
	doorLeft.classList.toggle("left");
	doorRight.classList.toggle("right");
}

const navTrigger = document.querySelector("#navTrigger");
navTrigger.addEventListener("click", (e) => {
	console.log(nav.style);
	if (nav.style.top === "5vh") {
		nav.style.top = "0";
	} else {
		if (doorLeft.classList.length === 2) {
			console.log(doorLeft.classList.length);
			doorControl(e);
			nav.style.top = "5vh";
		} else {
			nav.style.top = "5vh";
		}
	}
});
