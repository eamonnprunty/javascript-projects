function My_first_function() { //declare function
    var str = "This text is blue!"; //text after button clicked
    var result = str.fontcolor("blue"); //text color after clicked
    document.getElementById("blue_text").innerHTML=result; //line to make interactive with html
}

function myFunction() { //declare function
    var say = "i love"; //declare string var
    say += " the tech academy"; //add to string var
    document.getElementById("combine").innerHTML = say; //line to make interactive with html
}