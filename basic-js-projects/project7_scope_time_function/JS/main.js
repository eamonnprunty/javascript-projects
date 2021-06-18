function local_function() { //function to experiment with local variables
    var x= 10;
    var y = 0;
    x/2 == y;
    document.getElementById("local").innerHTML = y;
}

var x=25;//declare global variable
document.write(x);//write global variable to index.html

function debug_function() { //function to experiment with console
    var x= "string";
    var y = 0;
    var result = "string";
    x/y === result;
    document.getElementById("error").innerHTML = result;
}

function get_date() { //practicing using if statements
    if(new Date() .getHours() < 18) {
        document.getElementById("greeting").innerHTML="How are you today?";
    }
}

if (100>50) { //practicing using if statements
    document.write("100 is greater than 50")
}

function height_function() { //practicing using if and else statements
    height = document.getElementById("height").value;
    if (height >= 60) {
        rights = "you are tall enough to do activity!";
    }
    else {
        rights = "you are not tall enough to do activity!";
    }
    document.getElementById("how_tall_are_you?").innerHTML=rights;
}

function time_function() { //practicing using if, else, and else if statements as well as date object.
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon!";
    }
    else {
        reply = "It is evening time!";
    }
    document.getElementById("time_of_day").innerHTML=reply;
}