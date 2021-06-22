var X = 82; //global variable
document.write(X);
{
    let X = 33; //practice with local and global variables with let
    document.write("<br>" + X);
}
document.write("<br>" + X);


function call_loop() { //while loop practice
    var x="";
    var y =1;
    while(y<6) {
        x+= "<br>" +y;
        y++;
    }
    document.getElementById("loop").innerHTML=x;
}

var animals = ["dog","cat","dolphin","manatee","giraffe","cow","duck"]; //created array to loop through
var empty="";
var y;
function for_loop() { //for loop practice
    for (y=0; y< animals.length; y++) {
        empty += animals[y] + "<br>";
    }
    document.getElementById("list_of_animals").innerHTML=empty;
}

function array_function() { //practice with arrays
    var airplane_picture = [];
    airplane_picture[0]="flying";
    airplane_picture[1]="taxing";
    airplane_picture[2]="taking off";
    airplane_picture[3]="landing";
    airplane_picture[4]="refueling";
    document.getElementById("array").innerHTML="In this picture, the airplane is " + airplane_picture[4] + ".";
}

function constant_function() { //practice with constants
    const medical_treatment = {type:"vaccine", brand:"moderna", temp:"room temp"};
    medical_treatment.temp="frozen";
    medical_treatment.price="$32";
    document.getElementById("constant").innerHTML="The cost of the " + medical_treatment.brand + " " + medical_treatment.type + " was " + medical_treatment.price;
}

let airplane = { //creating an object using let
    make: "Lockheed-Martin ",
    model: "F-35A ",
    year: "2021 ",
    branch: "United States Air Force ",
    description: function() {
        return "The airplane is a " + this.year + this.branch + this.make + this.model;
    }
};
document.getElementById("airplane_object").innerHTML=airplane.description();