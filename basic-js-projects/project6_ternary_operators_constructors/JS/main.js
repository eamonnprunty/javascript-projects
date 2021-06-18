function ride_function() { //function to demonstrate ternary operators
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("ride").innerHTML=can_ride+ " to ride."
}

function vehicle(make, model, year, color) { //vehicle constructor
    this.vehicle_make= make;
    this.vehicle_model= model;
    this.vehicle_year= year;
    this.vehicle_color= color;
}
var jack = new vehicle("dodge", "viper", 2020, "red"); //creating instance of vehicle
var emily = new vehicle("jeep", "trail hawk", 2019, "white and black"); //creating instance of vehicle
var erik = new vehicle("ford", "pinto", 1971, "mustard"); //creating instance of vehicle

function myfunction() { //printing results for erik
    document.getElementById("new_and_this").innerHTML= "Erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model + " manufactured in " + erik.vehicle_year;
}

function nested_function() { //practing nested functions
    document.getElementById("nested_function").innerHTML=add();
        function add() {
            var starting=9;
            function add_one() {starting+=1;}
            add_one();
            return starting;
            document.getElementById("nested_function").innerHTML;
    }
}