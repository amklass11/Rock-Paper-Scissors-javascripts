var choice = ['rock', 'paper', 'scissors'];
function playRound(playerSelection,computerSelection) {

    if (playerSelection == 'rock' && b == 'paper') {
        console.log('you lose');
    } else if (playerSelection== 'rock' && computerSelection== 'scissors') {
        console.log('you win');
    } else if (playerSelection== 'paper' && computerSelection== 'scissors') {
        console.log('you lose');
    } else if (playerSelection== 'paper' && computerSelection== 'rock') {
        console.log('you win');
    } else if (playerSelection== 'scissors' && computerSelection== 'paper') {
        console.log('you win');
    } else if (playerSelection== 'scissors' && computerSelection== 'rock') {
        console.log('you lose');
    } else (playerSelection== b) 
    {console.log('Draw')}
        ;
    
};
function computerPlay(choice) {
    randomItem = choice[Math.floor(Math.random() * choice.length)];

}

var playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));



