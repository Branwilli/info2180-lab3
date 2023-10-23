function load() {
    document.addEventListener("DOMContentLoaded",function () {
        let Status = document.getElementById("status");
        let button = document.getElementsByClassName("btn");
        let square = document.getElementsById("board").children;
        let currentPlayer = "x";
    
        //Loops through each divison and adds another class called square that styles each square
        for(let item = 0; item < list.length; item++) {
            square[item].setAttribute("class","square");

            //Setups an action event that provides a differnt background for squares that the mouse is currentlt hovering over 
            square[item].addEventListener("mouseenter",() => {
                if (square[item] == "") {
                    square[item].classList.add("hover");
                }
            });

            //Setups an action event that return the default background after the mouse leaves the sqaure without clicking on it 
            square[item].addEventListener("mouseleave", () => {
                if (square[item] == "") {
                    square[item].classList.remove("hover");
                }
            });
    
            //Setups an action event that whenever the mouse clicks on a squre the background and content of that sqaure is change to reflect the current player. 
            //It also alternates between players 
            square[item].addEventListener("click",() => {
                if (square[item] == "") {
                    square[item].textContent = currentPlayer;
                    square[item].classList.add(currentPlayer)

                    currentPlayer = currentPlayer == "x" ? "o" : "x";
                }
            });

            //Loops through each square and checks if the content of the first three consecutive squares are the same and update the status of game 
            for (i = 0; i<square.length; i++) {
                if( square[i].textContent == square[i+1].textContent &&
                    square[i].textContent == square[i+2].textContent &&
                    square[i].textContent != "") {
                    Status.textContent = "Congratulations!" + (currentPlayer == "x"?"o":"x") + "is the winner!";
                    Status.setAttribute("class", "you-won");
                }

                if (square[i].textContent == square[i+3].textContent &&
                    square[i].textContent == square[i+6].textContent &&
                    square[i].textContent != "") {
                        Status.textContent = "Congratulations!" + (currentPlayer == "x"?"o":"x") + "is the winner!";
                        Status.setAttribute("class", "you-won");
                } 
                
                if (square[2].textContent == square[4].textContent &&
                    square[2].textContent == square[6].textContent &&
                    square[2].textContent != ""){
                        Status.textContent = "Congratulations!" + (currentPlayer == "x"?"o":"x") + "is the winner!";
                        Status.setAttribute("class", "you-won");
                }

                if (square[0].textContent == square[4].textContent &&
                    square[0].textContent == square[8].textContent &&
                    square[0].textContent != ""){
                        Status.textContent = "Congratulations!" + (currentPlayer == "x"?"o":"x") + "is the winner!";
                        Status.setAttribute("class", "you-won");
                } 
            }   
        };

        //Resets the content of each square and the status 
        button.addEventListener("click",() => {
            Status.classList.remove("you-won");
            Status.textContent = "Move your mouse over a square and click to play an X or an O."
            for(let item = 0; item < list.length; item++) {
                square[item].textContent = "";
                square[item].classList.remove(currentPlayer);
                };
            });
    });
}
