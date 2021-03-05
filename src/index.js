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

home.addEventListener("click", homeContent);
menu.addEventListener("click", menuContent);
contact.addEventListener("click", contactContent);
orderNow.addEventListener("click", menuContent); 

