  
function homeContent() {
	let content = document.querySelector("#content");
	let main = document.createElement("div");
	let mainTitle = document.createElement("h1");
	let mainDis = document.createElement("p");
	let button = document.createElement("button");

	mainTitle.textContent = "welcome to pizza first";
	mainDis.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquamzzzvo
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquamzzzvo
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquamzzzvo
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquamzzzvo`;
		button.textContent = "order now";
		
	content.textContent = "";
	content.append(mainTitle, mainDis, button);
}

export { homeContent }

