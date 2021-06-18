document.write(typeof true) //displays boolean
document.write(15+ "40") //type coercion practice
document.write(5+5)==10;
document.write(10)==12;


    var x = 30;
    var y = 30;
    document.write(x === y); //return true (same data types and values)

    var X="30";
    var Y =25;
    document.write(X===Y); //return false (different data types and values)

    var z = "200";
    var a = 200;
    document.write(z===a); //return false (different data type)

    var Z = 200;
    var A = 400;
    document.write(Z===A); //return false (different values)

    document.write(8>6 && 10>5); //return true
    document.write(8>11 && 30>70); //return false
    document.write(72<99 || 88>72); //return true
    document.write(72<11 || 66>100); //return false

    function not_function() {
        document.getElementById("not").innerHTML=!(100>5);
        document.getElementById("not2").innerHTML=!(100>200);
    }