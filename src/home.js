  
function homeContent() {
	let content = document.querySelector("#content");
	let main = document.createElement("div");
	let mainTitle = document.createElement("h1");
	let homeImg = document.createElement("img");
	let mainDis = document.createElement("p");
	let button = document.createElement("button");
	homeImg.src = "./images/04p.jpg";
	mainTitle.textContent = "welcome to pizza first";
	mainDis.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit`;
		button.textContent = "order now";

	homeImg.className = "homeImg";

	content.textContent = "";
	content.append(mainTitle,homeImg, mainDis, button);

	console.log(homeImg);
}

export { homeContent }

