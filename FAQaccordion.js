const listsBoxes = Array.from(document.querySelectorAll(".card-list__item"));

listsBoxes.forEach((list) =>{
    list.addEventListener("click", listHandler);
});

function listHandler (event) {
    event.preventDefault();
    let returnBox = event.target.closest(".list__item-img");
    let returnContent = returnBox.nextElementSibling;
    
    returnBox.classList.toggle("active");
    if (returnBox.classList.contains("active")) {
        returnContent.style.maxHeight = returnContent.scrollHeight + "rem";
    } else {
        returnContent.style.maxHeight = 0;
    }
};

const table = document.querySelector(".card__list");
let selectedTd;

table.onclick = function(event) {
  let td = event.target.closest('.card-list__item-items');

  if (!td) return; 

  if (!table.contains(td)) return;

  clickBack(td);
};

function clickBack(td) {
  if (selectedTd) { 
    selectedTd.classList.remove('clickBack');
  }
  selectedTd = td;
  selectedTd.classList.add('clickBack'); 
};
