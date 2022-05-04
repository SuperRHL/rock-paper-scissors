let myArray = ["ROCK", "PAPER", "SCISSORS"]
function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}
choice = document.getElementsByClassName('choice')
for (var i = 0; i < choice.length; i++) { choice[i].addEventListener('click', function () { game(this.textContent.trim().toUpperCase(), computerPlay()) }) }
let p_score = document.getElementById('player-score')
let c_score = document.getElementById('computer-score')
let choice_1 = document.getElementById('choice-1')
let choice_2 = document.getElementById('choice-2')
function update_score(player_choice, computer_choice) {
    p_score.textContent = player_score
    c_score.textContent = computer_score
    choice_1.textContent = player_choice
    choice_2.textContent = computer_choice


}

function resetGame() {
    player_score = 0
    computer_score = 0
    choice_1.textContent = 'Player choice'
    choice_2.textContent = 'Computer choice'
}
let player_score = 0
let computer_score = 0

function game(player_choice, computer_choice) {

    console.log(player_choice, computer_choice)
    if (player_choice == computer_choice) {
        update_score(player_choice, computer_choice)
    }
    else if (player_choice == "SCISSORS" && computer_choice != "ROCK" || player_choice == "ROCK" && computer_choice != "PAPER" || player_choice == "PAPER" && computer_choice != "SCISSORS" || player_choice == "ROCK" && computer_choice != "PAPER") {
        player_score += 1
        let p_score = document.getElementById('player-score')
        update_score(player_choice, computer_choice)

    }
    else if (player_choice == "SCISSORS" && computer_choice == "ROCK" || player_choice == "ROCK" && computer_choice == "PAPER" || player_choice == "PAPER" && computer_choice == "SCISSORS" || player_choice == "ROCK" && computer_choice == "PAPER") {
        computer_score += 1
        let c_score = document.getElementById('computer-score')
        update_score(player_choice, computer_choice)

    }
    else { alert("Wrong input") }
    if (player_score == 5) {
        alert("Player wins!")
        resetGame()
    }
    else if (computer_score == 5) {
        alert("Computer wins!")
        resetGame()
    }
}


