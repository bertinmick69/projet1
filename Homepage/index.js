
const menu = document.querySelector(".fa-bars");
const sousMenu = document.querySelector(".sous-menu");

menu.addEventListener("click", () => {
  if (sousMenu.style.display == "block") {
    sousMenu.style.display = "none";
  } else {
    sousMenu.style.display = "block";
  }
  console.log("event", event);
});

const user = document.querySelector("#user");

user.addEventListener("click", () => {
  let users = prompt("tape ton pseudo");
});

sousMenu.addEventListener("click", () => {
  sousMenu.style.display = "none";
  console.log("event", event);
});

const menu = document.querySelector(".fa-bars");
const sousMenu = document.querySelector(".sous-menu");

menu.addEventListener("click", () => {
  if (sousMenu.style.display == "block") {
    sousMenu.style.display = "none";
  } else {
    sousMenu.style.display = "block";
  }
  console.log("event", event);
});

const user = document.querySelector("#user");

user.addEventListener("click", () => {
  let users = prompt("tape ton pseudo");
});

sousMenu.addEventListener("click", () => {
  sousMenu.style.display = "none";
  console.log("event", event);
});
