console.log("Hello World");

let navItems = document.querySelectorAll("li"),
  thirdChild = navItems[2];

thirdChild.innerHTML = "Hello World";
thirdChild.style.color = "red";
thirdChild.style.fontSize = "20px";

navItems[1].style.color = "blue";
navItems[1].innerHTML = "<em>Italic</em>";
navItems[1].textContent = "Italicas";
navItems[0].style.color = "green";
navItems[0].innerHTML = "<strong>Bold</strong>";
navItems[0].textContent = "Bold";

document.querySelector("button").classList.remove("invisible");

document.querySelector("button");
