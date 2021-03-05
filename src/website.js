function header() {
	let container = document.querySelector(".container");
	let nav = document.createElement("nav");
	let home = document.createElement("li");
	let menu = document.createElement("li");
	let contact = document.createElement("li");
	nav.classList.add("content");
	home.className = "home";
	menu.className = "menu";
	contact.className = "contact";

	home.textContent = "Home";
	menu.textContent = "Menu";
	contact.textContent = "Contact";

	nav.append(home, menu, contact);
	container.insertBefore(nav, container.childNodes[0]);
}

export { header };

