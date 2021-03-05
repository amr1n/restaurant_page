function menuContent() {
	let content = document.querySelector("#content");
	let card = document.createElement("div");
	card.textContent = "hello world!";
	content.textContent = "";
	content.append(card);
}

export {menuContent}
