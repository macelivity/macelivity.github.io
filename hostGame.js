'use strict'

var game = new Game();
console.log("Created new game!");

setUpArea(document.getElementById("inpArea"), document.getElementById("namesField"));

document.getElementById("placeArea").querySelector("#inpField").addEventListener('input', function(e){
    setPlace(e);
})


function addPerson(){
    let namesField = document.getElementById("namesField");
    let newInputArea = document.getElementById("inpArea0").cloneNode(true);

    namesField.children[namesField.children.length - 1].before(newInputArea);

    setUpArea(newInputArea, namesField);

    game.addPerson();
}

function setUpArea(area, field){
    let inputField = area.querySelector("#inpField");

    inputField.value = "";
    inputField.addEventListener('input', function(e) {
        setPersonName(e, area);
    });

    var idValue = field.children.length - 4;
    area.id="inpArea" + idValue;
}

function removePerson(element){
    if(element.parentElement.parentElement.children.length <= 2) return;
    
    game.removePerson();

    for (let i = parseInt(element.parentElement.id.substring(7)) + 1;
         i < element.parentElement.parentElement.children.length - 1; i++) {
        element.parentElement.parentElement.children[i].id = "inpArea" + (i - 1);
    }

    element.parentElement.remove();
}

function setPersonName(value, element){
    game.setPerson(element.id.substring(7), value.target.value);
}

function setPlace(value){
    game.setPlace(value.target.value)
}


function confirmHost(){
    console.log("Place: " + game.getPlace());
    for (let i = 0; i < game.getPeople().length; i++) {
        console.log("Person number " + i + ": " + game.getPeople()[i]);
    }

    addGame(game);

    document.location.href = "index.html";
}
