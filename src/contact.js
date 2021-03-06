function contactContent() {
	let content = document.querySelector("#content");
	let address = document.createElement("div");
	let addressNo = document.createElement("p");
	let addressInfo = document.createElement("p");
	let img = document.createElement("img");

	img.src = "./images/map.jpg";

	address.className = "address";

	addressNo.textContent = "0755, north ddddd";
	addressInfo.textContent = "Lorem ipsum dolor sit ame";

	content.textContent = "";
	address.append(addressNo, addressInfo, img);
	content.append(address);
}

export {contactContent}
