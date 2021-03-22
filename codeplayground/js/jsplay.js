

function showDate() {
    var currentTime = Date();
    document.getElementById("now").innerHTML = currentTime;
}

function inputName() {
    var pageHeader = prompt("What is your name?");
    document.getElementById('nameHere').innerHTML = pageHeader;
}

function showName() {
    x = document.getElementById("nameHere");
    x.className = "open";
}

function hideName() {
    x = document.getElementById("nameHere");
    x.className = "close";
}


function enterNum(number) {
    document.getElementById('displayNum').innerHTML = number.innerHTML;
}

function hoverElement(textHovered) {
        document.getElementById("hoverText").innerHTML = textHovered.innerHTML;
    } 

function hoverOff() {
    document.getElementById("hoverText").innerHTML = "Try hovering over something";
}

//Fun array stuff here
var array1 = ["Game", " Sleep", " Eat", " Code"];

function loadArray() {
    document.getElementById("array").innerHTML = array1;
}

function addNew() {
    var newItem = prompt("What do you like to do?");
    array1[array1.length] = " " + newItem;
    document.getElementById("array").innerHTML = array1;

}