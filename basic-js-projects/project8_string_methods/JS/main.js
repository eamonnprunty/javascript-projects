function full_sentence() { //fucntion to concatenate individual strings
    var part_1="I have ";
    var part_2="eaten ";
    var part_3="a full ";
    var part_4="meal.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML=whole_sentence;
}

function slice_method() { //function to slice strings and display result
    var sentence="I thoroughly enjoy mint-chocolate chip ice cream.";
    var section=sentence.slice(18,48);
    document.getElementById("slice").innerHTML=section;
}

function string_method() { //method to convert integer/doubles to strings
    var x =182;
    document.getElementById("numbers_to_string").innerHTML=x.toString();
}

function precision_method() { //method to truncate a variable
    var y = 99.232939;
    document.getElementById("precision").innerHTML=y.toPrecision(3);
}