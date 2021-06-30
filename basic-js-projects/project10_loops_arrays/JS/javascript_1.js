function food_function() {
    var food_output;
    var foods = document.getElementById("food_input").value;
    var food_string= " is is a delicious food!"; 
    switch(foods) {
        case "Hotdog":
            food_output="Hotdog" + food_string;
        break;
        case "Hamburger":
            food_output="Hamburger" + food_string;
        break;
        case "Rice and Beans":
            food_output="Rice and Beans" + food_string;
        break;
        case "Tacos":
            food_output="Tacos" + food_string;
        break;
        case "Ice Cream":
            food_output="Ice Cream" + food_string;
        break;
        default:
        food_output= "Please input a food exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML=food_output;
}

function hello_world_function() {
    var a = document.getElementsByClassName("click");
    a[1].innerHTML="the text has changed!";
}

var c = document.getElementById("canvas1");
var ctx= c.getContext("2d");
var grd = ctx.createLinearGradient(0, 255, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 5, 155);
ctx.font= "20px Times New Roman";
ctx.fillText("Javascript is powerful", 10, 50);