var computerChoice = ["Rock","paper","scissors"];
var player = ["Rock","paper","scissors"];
var computerSelection = getComputerChoice();
var cWins = 0;
var pWins = 0;


function getComputerChoice() {
  var dog = Math.floor(Math.random()*computerChoice.length)
  const randomChoice = computerChoice[dog]
  return randomChoice
}

function playRound(playerSelection, computerSelection) {
  let result ;
  if (playerSelection == "Rock" && computerSelection == "Rock") {
  result ='You tied! You both picked rock' 
} else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
  result = 'You tied you both picked scissors'
} else if (playerSelection == 'paper' && computerSelection == 'paper') {
result = 'You tied! You both picked paper'
} else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
  result = 'You lost. Rock beats scissors' 
  cWins++
} else if (playerSelection == 'scissors' && computerSelection == 'paper') {
  result = 'You won! Scissors beats paper'
  pWins ++
} else if (playerSelection == 'Rock' && computerSelection == 'paper') {
  result = 'You lost. Paper beats rock'
  cWins ++
} else if (playerSelection == 'Rock' && computerSelection == 'scissors') {
  result = 'You won. rock beats scissors'
  pWins ++
} else if (playerSelection == 'paper' && computerSelection == 'scissors') {
  result = 'You lost. scissors beats paper'
  cWins ++
} else if (playerSelection == 'paper' && computerSelection == 'Rock') {
  result = 'You won. paper beats rock'
  pWins ++
}
if (pWins == 5) {
result = 'The player has won 5 rounds'
} else if (cWins == 5) { 
  result ='The computer has won 5 rounds'
}
document.getElementById("pWin").innerHTML = pWins;
document.getElementById("cWin").innerHTML = cWins;
document.getElementById("Result").innerHTML = result;
return result;
}



document.getElementById('Rocks').onclick = () => console.log(playRound(player[0],getComputerChoice()));
document.getElementById('Papers').onclick = () => console.log(playRound(player[1], getComputerChoice()));
document.getElementById('Scissors').onclick = () => console.log(playRound(player[2], getComputerChoice()));