function menuContent() {
	let content = document.querySelector("#content");
	let cards = document.createElement("div");
	cards.className = "cards";
	content.textContent = "";
	for (let i = 0; i < 6; i++) {
		let card = document.createElement("div");
		let img = document.createElement("img");
		let des = document.createElement("p");
		img.className = "menuImg";
		img.src = "./images/03p.jpg";
		des.textContent = "Lorem ipsum doldor sit amet.";

		card.className = "card";

		card.append(img, des);
		cards.append(card);
		content.append(cards);
	}
}

export {menuContent}
