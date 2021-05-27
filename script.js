const doorLeft = document.querySelector(".left");
const doorRight = document.querySelector(".right");

const openDoor = document
	.querySelector("button")
	.addEventListener("click", () => {
		doorLeft.classList.toggle("left");
		doorRight.classList.toggle("right");
	});
console.log(openDoor);
