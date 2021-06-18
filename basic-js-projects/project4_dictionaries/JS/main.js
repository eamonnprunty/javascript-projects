function my_dictionary() { //function creating a KVP
    var grades = {
        history: "A",
        science: "A",
        geography: "A",
        Math: "F"
    };
    document.getElementById("dictionary").innerHTML = grades.Math; //writing value "Math" from KVP to index.html
    delete grades.history; //removing value "history from KVP"
    document.getElementById("undefined").innerHTML=grades.history; //calling for value "history" to be printed to index.html. Impossible because it was just removed from the KVP.
}