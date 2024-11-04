window.addEventListener("DOMContentLoaded", main);

//Inköpslista
const shoppingList = [];

function main() {
    console.log(shoppingList);
    removeShoppingItem.onclick = removeShoppingItemOnclick;
    addShoppingItem.onclick = addShoppingItemOnclick;
    searchCarButton.onclick = searchCarButtonOnclick

    renderCarList(); // Visa listan vid start
}

//Funktion för att ta bort bilmärken
function removeShoppingItemOnclick() {
    shoppingList.pop();
    console.log(shoppingList);
    renderCarList();
}

//Funktion för att lägga till bilmärken
function addShoppingItemOnclick() {
    const promptField = prompt("Lägg till en ny vara");
    shoppingList.push(promptField);
    console.log(shoppingList);
    renderCarList();
}

//Funktion för att söka efter bilmärken
function searchCarButtonOnclick() {
    const promptSearchCar = prompt("Sök efter ett bilmärke");
    let isFound = false;

    for (const car of shoppingList) {
        if (car === promptSearchCar) {
            console.log("Hurra, vi hittade bilen du sökte!");
            isFound = true;
            break;
        }
    }

    if (!isFound) {
        console.log("Tyvärr kunde vi inte hitta bilen du letade efter :-(");
    }
    renderCarList();
}

// Övning 5: Skapa en ny funktion som loopar igenom listan och skapar en list (ul- och li-element). Listan ska
//sedan läggas in i DOM’en. När en förädring av listan görs (punkt 2 & 3) så ska funktionen även
//där anropas så att DOM’en uppdateras och visar rätt innehåll.

// Funktion för att rendera bilmärkeslistan i DOM
function renderCarList() {
    const shoppingListContainer = document.getElementById("shoppingListContainer");
    shoppingListContainer.innerHTML = ""; // Rensa gamla listan

    const ulElement = document.createElement("ul");

    // Skapa en <li> för varje bilmärke i shoppingList
    shoppingList.forEach(car => {
        const liElement = document.createElement("li");
        liElement.textContent = car;
        ulElement.appendChild(liElement);
    });

    shoppingListContainer.appendChild(ulElement); // Lägg till listan i DOM
}




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

