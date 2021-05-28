var buildUrl = "Build";
var loaderUrl = buildUrl + "/WebGl.loader.js";
var config = {
	dataUrl: buildUrl + "/WebGl.data.unityweb",
	frameworkUrl: buildUrl + "/WebGl.framework.js.unityweb",
	codeUrl: buildUrl + "/WebGl.wasm.unityweb",
	streamingAssetsUrl: "StreamingAssets",
	companyName: "DigitalInflux",
	productName: "ProtoptypeGame",
	productVersion: "0.1",
};

var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");
var mobileWarning = document.querySelector("#unity-mobile-warning");

// By default Unity keeps WebGL canvas render target size matched with
// the DOM size of the canvas element (scaled by window.devicePixelRatio)
// Set this to false if you want to decouple this synchronization from
// happening inside the engine, and you would instead like to size up
// the canvas DOM size and WebGL render target sizes yourself.
// config.matchWebGLToCanvasSize = false;

canvas.style.width = "100%";
canvas.style.height = "100%";

canvas.style.background = "url('" + buildUrl + "/WebGl.jpg') center / cover";
loadingBar.style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
	createUnityInstance(canvas, config, (progress) => {
		progressBarFull.style.width = 100 * progress + "%";
	})
		.then((unityInstance) => {
			loadingBar.style.display = "none";
			fullscreenButton.onclick = () => {
				unityInstance.SetFullscreen(1);
			};
		})
		.catch((message) => {
			alert(message);
		});
};
document.body.appendChild(script);
