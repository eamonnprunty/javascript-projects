function my_function() { //funtion to experiment with Nan
    document.getElementById("test").innerHTML=0/0;
    document.getElementById("test2").innerHTML=isNaN("I like french fries");
    document.getElementById("test3").innerHTML=isNaN(5000);
}

document.write(2E310); //writing infinity to index.html

document.write(-2E310); //writing negative infinity to index.html

document.write(500 > 0); //boolean displaying true

document.write(5>50); //boolean displaying false

console.log(33/11); //math in the console

console.log(5>50); //boolean logic in console(false)