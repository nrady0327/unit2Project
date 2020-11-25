$(document).ready(function ()
{
    var gameOver = 0;
//tell jquery to look for img tag
    //when the image is click perform the function
    $("img").click(calcGame);

    //calcGame function
    function calcGame()
    {
        //what image was clicked
        var choosenImage = $(this);
        //if statements for what the human player chose
        if(choosenImage(this) ==1)
        {
            var rock = "Rock";
            $("#userOutput").text(rock);
        }
        else if(choosenImage(this) ==2)
        {
            var paper = "Paper";
            $("#userOutput").text(paper);
        }
        else if(choosenImage(this) == 3)
        {
            var scissors = "Scissors";
            $("#userOutput").text(scissors);
        }
        else if(choosenImage(this) == 4)
        {
            var lizard = "Lizard";
            $("#userOutput").text(lizard);
        }
        else
            {
                var spock = "Spock";
                $("#userOutput").text(spock);
            }

        //generate a random number (1-5) for computer player
        var computerNumber = Math.floor(Math.random() * 5) +1;

        //if statements for each random number generated and what they mean

        if(computerNumber == 1)
        {
            var rock = "Rock";
            $("#computerOutput").text(rock);
        }
        else if(computerNumber==2)
        {
            var paper = "Paper";
            $("#computerOutput").text(paper);
        }
        else if(computerNumber==3)
        {
            var scissors = "Scissors";
            $("#computerOutput").text(scissors);
        }
        else if(computerNumber==4)
        {
            var lizard = "Lizard";
            $("#computerOutput").text(lizard);
        }
        else
            {
                var spock = "Spock";
                $("#computerOutput").text(spock);
            }

        //if statements for applying rules to human and computer characters chosen (separate if and else for
        // 2 possible winners)
        //<li>Scissors cuts Paper</li>
        if(choosenImage(this) === "Scissors" && computerNumber == 2)
        {
            var scissorRule = "Human wins because Scissors cuts Paper";
            $("#winnerOutput").text(scissorRule);
        }
        else if(choosenImage(this) ==="Paper" && computerNumber == 3)
        {
            var scissorRule2 = "Computer wins because Scissors cuts Paper";
            $("#winnerOutput").text(scissorRule2);
        }

        //<li>Paper covers Rock</li>
        else if(choosenImage(this) === "Paper" && computerNumber == 1)
        {
            var paperRule = "Human wins because Paper covers Rock";
            $("#winnerOutput").text(paperRule);
        }
        else if(choosenImage(this) === "Rock" && computerNumber == 1)
        {
            var paperRule2 = "Computer wins because Paper covers Rock";
            $("#winnerOutput").text(paperRule2);
        }

        //<li>Rock crushes Lizard</li>
        else if(choosenImage(this) ==="Rock" && computerNumber == 4)
        {
            var rockRule = "Human wins because Rock crushes Lizard";
            $("#winnerOutput").text(rockRule);
        }
        else if(choosenImage(this) === "Lizard" && computerNumber == 1)
        {
            var rockRule2 = "Computer wins because Rock crushes Lizard";
            $("#winnerOutput").text(rockRule2);
        }


        // <li>Lizard poisons Spock</li>
        else if(choosenImage(this) ==="Lizard" && computerNumber == 5)
        {
            var lizardRule = "Human wins because Lizard poisons Spock";
            $("#winnerOutput").text(lizardRule);
        }
        else if(choosenImage(this) === "Spock" && computerNumber == 4)
        {
            var lizardRule2 = "Computer wins because Lizard poisons Spock";
            $("#winnerOutput").text(lizardRule2);
        }

        //<li>Spock smashes Scissors</li>
        else if(choosenImage(this) ==="Spock" && computerNumber == 3)
        {
            var spockRule = "Human wins because Spock smashes Scissors";
            $("#winnerOutput").text(spockRule);
        }
        else if(choosenImage(this) === "Scissors" && computerNumber == 5)
        {
            var spockRule2 = "Computer wins because Spock smashes Scissors";
            $("#winnerOutput").text(spockRule2);
        }

        //<li>Scissors decapitates Lizard</li>
        else if (choosenImage(this) === "Scissors" && computerNumber == 4)
        {
            var altScissors = "Human wins because Scissors decapitates Lizard";
            $("#winnerOutput").text(altScissors);
        }
        else if(choosenImage(this) === "Lizard" && computerNumber == 3)
        {
            var altScissors2 = "Computer wins because Scissors decapitates Lizard";
            $("#winnerOutput").text(altScissors2);
        }

        //<li>Lizard eats Paper</li>
        else if(choosenImage(this) ==="Lizard" && computerNumber == 2)
        {
            var altLizard = "Human wins because Lizard eats Paper";
            $("#winnerOutput").text(altLizard);
        }
        else if(choosenImage(this) === "Paper" && computerNumber == 4)
        {
            var altLizard2 = "Computer wins because Lizard eats Paper";
            $("#winnerOutput").text(altLizard2);
        }

        //<li>Paper disproves Spock</li>
        else if(choosenImage(this) === "Paper" && computerNumber == 5)
        {
            var altPaper = "Human wins because Paper disproves Spock";
            $("#winnerOutput").text(altPaper);
        }
        else if(choosenImage(this) === "Spock" && computerNumber == 2)
        {
            var altPaper2 = "Computer wins because Paper disproves Spock";
            $("#winnerOutput").text(altPaper2);
        }

        // <li>Spock vaporizes Rock</li>
        else if(choosenImage(this) === "Spock" && computerNumber == 1)
        {
            var altSpock = "Human wins because Spock vaporizes Rock";
            $("#winnerOutput").text(altSpock);
        }
        else if(choosenImage(this) === "Rock" && computerNumber == 5)
        {
            var altSpock2 = "Computer wins because Spock vaporizes Rock";
            $("#winnerOutput").text(altSpock2);
        }

        //<li>Rock crushes Scissors</li>
        else if(choosenImage(this) === "Rock" && computerNumber == 3)
        {
            var altRock = "Human wins because Rock crushes Scissors";
            $("#winnerOutput").text(altRock);
        }
        else if(choosenImage(this) === "Scissors" && computerNumber == 1)
        {
            var altRock2 = "Computer wins because Rock crushes Scissors";
            $("#winnerOutput").text(altRock2);
        }

        //if statement for when gameOver == 2
        if(gameOver == 2)
        {
            var gameOver2 = "Game over!";
            $("#game").text(gameOver2);
        }


    }

});