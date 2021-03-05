import {homeContent} from './home.js';
import {menuContent} from './menu.js';
import {contactContent} from './contact.js';
import {header} from './website.js';

header();
homeContent();

let home = document.querySelector(".home");
let menu = document.querySelector(".menu");
let contact = document.querySelector(".contact");
let orderNow = document.querySelector("button");

home.addEventListener("click", () => {
	homeContent();
	menu.classList.remove("active");
	contact.classList.remove("active");
	home.classList.add("active");
});
menu.addEventListener("click", () => {
	menuContent();
	home.classList.remove("active");
	contact.classList.remove("active");
	menu.classList.add("active");
});
contact.addEventListener("click", () => {
	contactContent();
	home.classList.remove("active");
	menu.classList.remove("active");
	contact.classList.add("active");
});
orderNow.addEventListener("click", menuContent); 

