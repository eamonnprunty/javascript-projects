function addition_Function() { //function to demonstrate addition
    var addition = 2+2;
    document.getElementById("result").innerHTML = "2+2=" + addition;
}

function subtraction_Function() { //function to demonstrate subtraction
    var sub = 27-5;
    document.getElementById("math").innerHTML= "27-5=" + sub;
}

function division_Function() { //function to demonstrate division
    var div = 30/6;
    document.getElementById("div").innerHTML= "30/6=" + div;
}

function multi_Function() { //function to demonstrate multiplication 
    var mult = 8*5;
    document.getElementById("mult").innerHTML= "8*5=" + mult;
}

function many_Maths() { //function to demonstrate arithmetic with multiple operators.
    var simple_Math = (10*5) /5 +6 -7;
    document.getElementById("many").innerHTML = "10 times 5 divided by 5 plus 6 minus 7 equals " + simple_Math;
}

function mod_Math() { //function to demonstrate modulus
    var simple_Math = 20 % 4;
    document.getElementById("mod").innerHTML = "When you divide 20 by 4 you have a remainder of: " + simple_Math;
}

function negation_Math() { //function to demonstrate unary/negation
    var x = 10;
    document.getElementById("negate").innerHTML=-x;
}

function increment_Math() { //function to demonstrate incrementing
    var y = 1;
    y++;
    document.getElementById("increment").innerHTML=y;
}

function decrement_Math() { //function to demonstrate decrementing
    var z = 20;
    z--;
    document.getElementById("decrement").innerHTML=z;
}

//window.alert(Math.random());
document.write(Math.random()); //writing a random number to index.html

function math_object() { //function utilizing a math object
    var p = Math.random();
    document.getElementById("pi").innerHTML= p;
}
