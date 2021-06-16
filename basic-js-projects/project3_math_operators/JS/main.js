function addition_Function() {
    var addition = 2+2;
    document.getElementById("result").innerHTML = "2+2=" + addition;
}

function subtraction_Function() {
    var sub = 27-5;
    document.getElementById("math").innerHTML= "27-5=" + sub;
}

function division_Function() {
    var div = 30/6;
    document.getElementById("div").innerHTML= "30/6=" + div;
}

function multi_Function() {
    var mult = 8*5;
    document.getElementById("mult").innerHTML= "8*5=" + mult;
}

function many_Maths() {
    var simple_Math = (10*5) /5 +6 -7;
    document.getElementById("many").innerHTML = "10 times 5 divided by 5 plus 6 minus 7 equals " + simple_Math;
}

function mod_Math() {
    var simple_Math = 20 % 4;
    document.getElementById("mod").innerHTML = "When you divide 20 by 4 you have a remainder of: " + simple_Math;
}

function negation_Math() {
    var x = 10;
    document.getElementById("negate").innerHTML=-x;
}

function increment_Math() {
    var y = 1;
    y++;
    document.getElementById("increment").innerHTML=y;
}

function decrement_Math() {
    var z = 20;
    z--;
    document.getElementById("decrement").innerHTML=z;
}

//window.alert(Math.random());
document.write(Math.random());

function math_object() {
    var p = Math.random();
    document.getElementById("pi").innerHTML= p;
}
