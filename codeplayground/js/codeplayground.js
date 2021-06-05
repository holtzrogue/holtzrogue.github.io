//Testing
function testFunc() {
    var username = prompt("Please input your name here:");
    if (username.length != 0) {
        document.getElementById("pageTitle").innerHTML = username + "'s coding playground";
    }
    else {
        document.getElementById("pageTitle").innerHTML = "Anonymous capybara's coding playground";
    }
    
}


//Auto 
function showDate() {
    var grabTime = Date();
    document.getElementById("currentTime").innerHTML = grabTime;
}