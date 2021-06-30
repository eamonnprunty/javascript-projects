//this variable keeps track of whose turn it is.
let activePlayer = 'X';
//this array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//this function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of selectedSquare array to see if it contains the square //number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is.
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage='url("images/x.png")';
            //active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage='url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition if for changing the active player.
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'.
            activePlayer='O';
        //if active player is anything other than 'X'.
        } else {
            //change the activePlayer to 'X'
            activePlayer='X';
        }

        //this function plays a placement sound.
        //var audio = URL('/media/place.mp3');
        //audio('./media/place.mp3');
        //this function takes a string parameter of the path you set earlier for placement sound
        function audio(audioURL) {
            //we create a new audio object and we pass the path as a parameter.
            audio('./media/place.mp3');
            let audio = new Audio(audioURL);
            //play method plays our audio sound.
            audio.play();
        }
        //this condition checks to see if it is CPU's turn.
        if(activePlayer === 'O') {
            //this function disables clicking for CPU choice.
            disableClick();
            //this function waits 1 second before CPU places image and enables click.
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        //returning true is needed for computersTurn() function to work.
        return true;
    }
    //this function results in a random square being selected.
    function computersTurn() {
        //this boolean is needed for our while loop.
        let success = false;
        //this variable stores a random number 0-8.
        let pickASquare;
        //this condition allows our while loops to keep trying if a square is selected already.
        while(!success) {
            //a random number between 0-8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //this line calls the function.
                placeXOrO(pickASquare);
                //this changed our boolean and ends the loop.
                success = true;
            };
        }
    }
    function checkWinConditions() {
        //X 0,1,2 condition.
        if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50,100,558,100) }
        //X 3,4,5 condition.
        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50,304,558,304) }
        //X 6,7,8 condition.
        else if(arrayIncludes('6X', '7X', '8X')) { drawWinLine(50,508,558,508) }
        //X 0,3,6 condition
        else if(arrayIncludes('0X', '3X', '6X')) { drawWinLine(100,50,100,558) }
        //X 1,4,7 condition
        else if(arrayIncludes('1X', '4X','7X')) { drawWinLine(304,50,304,558)} 
        //X 2,5,8 condition
        else if(arrayIncludes('2X', '5X', '8X')) { drawWinLine(508,50,508,558)}
        //X 6,4,2 condition
        else if(arrayIncludes('6X', '4X', '2X')) { drawWinLine(100,508,510,90)}
        //X 0,4,8 condition
        else if(arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520)}
        //O 0,1,2 condition
        else if(arrayIncludes('0O', '1O', '2O')) {drawWinLine(50,100,558,100)}
        //O 3,4,5 condition
        else if(arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,304,558,304)}
        //O 6,7,8 condition
        else if(arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,508)}
        //O 0,3,6
        else if(arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558)}
        //O 1,4,7
        else if(arrayIncludes('1O','4O','7O')) {drawWinLine(304,50,304,558)}
        //O 2,5,8
        else if(arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558)}
        //O 6,4,2 
        else if(arrayIncludes('6O','4O','2O')) {drawWinLine(100,508,510,90)}
        //O 0,4,8
        else if(arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520)}
        //this condition checks for tie. If none of the above conditions register and 9 
        //squares are selected the code exceutes.
        else if(selectedSquares.length>= 9) {
            //this function plays the tie game sound.
            //Audio('media/tie.mp3');
            //this function sets a .3 second timer before the resetGame is called.
            setTimeout(function () { resetGame(); }, 1000)
        }
    }
    //this function checks if an array includes 3 strings. It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 variables we pass are all included in our array true is returned and our else if condition executes the drawWinLine function.
        if (a === true && b=== true && c===true) {return true}
    }
    //this function makes our body element temporarily unclickable.
    function disableClick() {
        //this makes our body unclickable
        body.style.pointerEvents= 'none';
        //this makes our body clickable again after 1 second.
        setTimeout(function() {body.style.pointerEvents='auto';}, 1000);
    }
    
    //this function utilizes html canvas to draw win lines.
    function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
        //this line accesses our html canvas element.
        const canvas = document.getElementById('win-lines')
        //this line gives us access to methods and properties to use on canvas
        const c = canvas.getContext('2d');
        //this line indicates where the start of a line's x axis is.
        let xl = coordX1,
            //this line indicates where the start of a line's y axis is.
            y1= coordY1,
            //this line indicates where the end of a lines x axis is.
            x2= coordX2,
            //this line indicates where the end of a lines x axis is.
            y2 = coordY2,
            //this variable stores temporary x axis data we update in our animation loop.
            x= x1,
            //this variable stores temporary y axis data we update in our animation loop.
            y=y1;
    }

    //this function interacts with the canvas
}