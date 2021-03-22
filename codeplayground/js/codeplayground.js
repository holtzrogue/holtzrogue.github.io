//Testing
function testFunc() {
    var x = prompt("Please input your name here:");
    document.getElementById("pageTitle").innerHTML = x + "'s coding playground";
}






//Auto 
function showDate() {
    var grabTime = Date();
    document.getElementById("currentTime").innerHTML = grabTime;
}