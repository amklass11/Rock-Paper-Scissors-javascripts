
function computerPlay(choice) {
     choice = ['rock', 'paper', 'scissors'];
    randomItem = choice[Math.floor(Math.random() * 3)];
    console.log(randomItem);

};
function playRound(playerSelection,computerSelection) {

    if (playerSelection === 'rock'&&computerSelection === 'paper') 
    {
        console.log('you lose');
    }
     else if (playerSelection === 'rock'&&computerSelection=== 'scissors') {
        console.log('you win');
    }
     else if (playerSelection === 'paper'&&computerSelection=== 'scissors') {
        console.log('you lose');
    } 
    else if (playerSelection === 'paper'&&computerSelection=== 'rock') {
        console.log('you win');
    } 
    else if (playerSelection === 'scissors'&&computerSelection=== 'paper') {
        console.log('you win');
    } 
    else if (playerSelection === 'scissors'&&computerSelection=== 'rock') {
        console.log('you lose');
    } 
    else if(computerSelection===playerSelection)
    {
        console.log('Draw');
}
}
    

const playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);

console.log(playerSelection)
console.log(playRound('rock','paper'));


