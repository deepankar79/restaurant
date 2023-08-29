"use strict";
import { menu, rmenu } from "./menu";
import { home, wlcm } from "./home";
import { contact, info } from "./contact";
import "./style.css";

let uchoice;
const con = document.getElementById("content");
const nav = document.createElement("div");
const nbar = document.createElement("ul");
const head = document.createElement("h1");
const homeb = document.createElement("button");
const menub = document.createElement("button");
const contactb = document.createElement("button");

function firstf() {
  homeb.textContent = "Home";
  menub.textContent = "Menu";
  contactb.textContent = "Contact";
  homeb.classList.add("btns");
  menub.classList.add("btns");
  contactb.classList.add("btns");
  head.textContent = "Tasty Food";

  nav.classList.add("navbar");
  nbar.classList.add("navbar-2");
  con.append(nav);
  nav.append(head);
  nav.append(nbar);
  nbar.append(homeb);
  nbar.append(menub);
  nbar.append(contactb);
}
firstf();
const btns = document.querySelectorAll(".btns");

btns.forEach((button) =>
  button.addEventListener("click", function (e) {
    uchoice = e.target.innerText;
    if (uchoice === "Home") {
      home();
      con.append(wlcm);
      wlcm.classList.remove("hidden");
      info.classList.add("hidden");
      rmenu.classList.add("hidden");
    } else if (uchoice === "Menu") {
      menu();
      con.append(rmenu);
      rmenu.classList.remove("hidden");
      info.classList.add("hidden");
      wlcm.classList.add("hidden");
    } else if (uchoice === "Contact") {
      contact();
      con.append(info);
      rmenu.classList.add("hidden");
      info.classList.remove("hidden");
      wlcm.classList.add("hidden");
    }
  })
);

export { firstf };
