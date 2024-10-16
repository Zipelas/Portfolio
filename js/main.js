// Hamburgeikonen
const menuButton = document.querySelector("a#menu-icon");

menuButton.addEventListener("click", function(e) {
  e.preventDefault();
  menuButton.classList.toggle("close");
});

// Öppna/stäng hamburgermenyn
function openHbMenu() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Stäng dropdownmenyn när användaren klickar utanför
window.onclick = function(event) {
  if (!event.target.matches('#menu-icon') && !event.target.matches('.bar')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
}

// Växla mellan mörkt och ljust bakgrund
function toggleDarkLight() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// Loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}