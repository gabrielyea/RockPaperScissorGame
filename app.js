/* eslint-disable no-unused-vars */

//TODO -- learn how to import this from other file *as a module?
class Weapon{
  
  constructor(name, beats, dies)
  {
    this.name = name;
    this.beats = beats;
    this.dies = dies; //dont need it, just in case I want to add more weapons
  }

  //methods

  //checks outcome from player perspective other weapon is computer's choice.
  // checkOutcome(otherWeapon)
  // {
  //   let outcomeString = "";
  //   let outcomeMessage = [];
  //   //tie
  //   if(this.name == otherWeapon.name)
  //   {
  //     outcomeString = this.name + " hugs " + otherWeapon.name;
  //     return outcomeMessage = [outcomeString, "TIE"];
  //   }
    
  //   //victory
  //   if(this.beats == otherWeapon.name)
  //   {
  //     outcomeString = this.name + " beats " + otherWeapon.name;
  //     return outcomeMessage = [outcomeString, "VICTORY"]; 
  //   }
  //   //defeat
  //   else
  //   {
  //     outcomeString = this.name + " dies to " + otherWeapon.name;
  //     return outcomeMessage = [outcomeString, "DEFEAT"]; 
  //   }
  //}
}

class Rock extends Weapon
{
  constructor()
  {
    super("ROCK", "SCISSORS", "PAPER");
  }
}

class Paper extends Weapon
{
  constructor()
  {
    super("PAPER", "ROCK", "SCISSORS");
  }
}

class Scissors extends Weapon
{
  constructor()
  {
    super("SCISSORS", "PAPER", "ROCK");
  }
}
//----------------------------------------------

let score = new Map();
score.set("Player", 0);
score.set("Machine", 0);
let rock = new Rock();
let paper = new Paper();
let scissors = new Scissors();
let choice = [rock, paper, scissors]
let playerColumn = document.querySelector(".item4");
let machineColumn = document.querySelector(".item5");

const weaponsContainer = document.querySelector(".weapons")
const weapons = document.querySelectorAll(".weapon");
const container = document.querySelector("#container");
const scoreContaier = document.querySelector(".score");
const endScreen = document.querySelector(".endScreen");

weapons.forEach(weapon => weapon.addEventListener("click", startGame));

weapons.forEach(weapon => weapon.addEventListener("transitionend", removeSelection));

endScreen.addEventListener("click", reStartGame);



//callback on click
function startGame(e)
{
  let targetName = e.target.name;
  let specWeapon = Array.from(weapons);
  //outcome
  let humanChoice = humanPlay(targetName.toUpperCase());
  let computerChoice = computerPlay();
  let roundOutcome = playRound(humanChoice, computerChoice);
  //--------
  specWeapon = specWeapon.find(weapon => weapon.name == targetName);
  specWeapon.classList.add("using");

  keepScore(roundOutcome[1]);

  displayResults(roundOutcome);
}

//returns object weapon----
function computerPlay() 
{
  return choice[getRandomInteger(0, 3)];
}

//returns object weapon----
function humanPlay(humanChoice) 
{
  //let humanChoice = prompt("Your turn:", "Rock, Paper, Scissors").toUpperCase();
  let found = choice.find(x => x.name == humanChoice);
  return found;
}

//Checks outcome of human vs computer
function playRound(humanChoice, computerChoice) 
{
  let outcomeString = "";
    let outcomeMessage = [];
    //tie
    if(humanChoice.name == computerChoice.name)
    {
      outcomeString = humanChoice.name + " hugs " + computerChoice.name;
      return outcomeMessage = [outcomeString, "TIE"];
    }
    
    //victory
    if(humanChoice.beats == computerChoice.name)
    {
      outcomeString = humanChoice.name + " beats " + computerChoice.name;
      return outcomeMessage = [outcomeString, "VICTORY"]; 
    }
    //defeat
    else
    {
      outcomeString = humanChoice.name + " dies to " + computerChoice.name;
      return outcomeMessage = [outcomeString, "DEFEAT"]; 
    }
}

function displayResults(outcome)
{
  
  let check = document.querySelector(".result");
  if(check != null)
  {
    check.remove();
  }

  let res = document.createElement("div");
  let title = document.createElement("h1");
  let p = document.createElement("p");

  res.classList.add("result");
  title.classList.add("item1");
  res.appendChild(title);
  p.classList.add("item2");
  res.appendChild(p);

  title.textContent = outcome[1];
  p.textContent = outcome[0];


  container.appendChild(res);
  container.classList.remove("hidden");
  container.classList.add("show");

   
}

function keepScore(roundMsg)
{
  playerColumn = document.querySelector(".item4");
  machineColumn = document.querySelector(".item5");
  let victoryMark = document.createElement("p");
  let defeatMark = document.createElement("p");
  victoryMark.textContent = "X";
  defeatMark.textContent = "O";
  if(roundMsg === "VICTORY")
  {
    playerColumn.appendChild(victoryMark);
    machineColumn.appendChild(defeatMark);
    let points = score.get("Player") + 1;
    score.set("Player", points);
    
  }
  else if(roundMsg === "DEFEAT")
  {
    machineColumn.appendChild(victoryMark);
    playerColumn.appendChild(defeatMark);
    let points = score.get("Machine") + 1;
    score.set("Machine", points);
    
  }
  checkForWinner();
  
}

function checkForWinner()
{
  let message = "";
  if(score.get("Player") > 4) 
  {
    message = "Player wins"
    showEndScreen(message);
  }
  else if(score.get("Machine") > 4)
  {
    message = "Machine wins"
    showEndScreen(message);
  }
}

function showEndScreen(message)
{
  scoreContaier.classList.add("hidden");
  weaponsContainer.classList.add("hidden");
  endScreen.classList.remove("hidden");
  endScreen.classList.add("show");

  container.remove();
  let m = document.createElement("p");
  m.textContent = message;
  endScreen.appendChild(m)


}

function reStartGame()
{
  console.log("Click");
  location.reload();
}
//---------------------------------

//extra func
function getRandomInteger(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
//for animation
function removeSelection(e)
{
  if(e.propertyName !== "transform")
  return;
  this.classList.remove("using");
}





