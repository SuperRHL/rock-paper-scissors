let myArray = ["ROCK", "PAPER", "SCISSORS"]
function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}
function playerPlay() {
    let input = prompt("Choose your weapon!")
    return input
}

player_score = 0
computer_score = 0

function game() {
    element = document.getElementById('heading')
    player_choice = playerPlay().toUpperCase();
    computer_choice = computerPlay();
    console.log(player_choice, computer_choice)
    if (player_choice == computer_choice) {
        console.log("Tie")
    }
    else if (player_choice == "ROCK" && computer_choice != "PAPER" || player_choice == "PAPER" && computer_choice != "SCISSORS" || player_choice == "ROCK" && computer_choice != "PAPER") {
        player_score += 1
    }
    else if (player_choice == "ROCK" && computer_choice == "PAPER" || player_choice == "PAPER" && computer_choice == "SCISSORS" || player_choice == "ROCK" && computer_choice == "PAPER"){
        computer_score += 1
    }
    else{console.log("Wrong input")}
    console.log(player_score, computer_score)
    if (player_score == 5) {
        element.textContent = ("Player wins!")
    }
    else if (computer_score == 5) {
        element.textContent = ("Computer wins!")
    }
    
    else { game() }

    
}



let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    game();
});