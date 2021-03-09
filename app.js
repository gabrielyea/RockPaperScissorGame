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
  checkOutcome(otherWeapon)
  {
    let outcomeString = "";
    let outcomeMessage = [];
    //tie
    if(this.name == otherWeapon.name)
    {
      outcomeString = this.name + " hugs " + otherWeapon.name;
      return outcomeMessage = [outcomeString, "TIE"];
    }
    
    //victory
    if(this.beats == otherWeapon.name)
    {
      outcomeString = this.name + " beats " + otherWeapon.name;
      return outcomeMessage = [outcomeString, "VICTORY"]; 
    }
    //defeat
    else
    {
      outcomeString = this.name + " dies to " + otherWeapon.name;
      return outcomeMessage = [outcomeString, "DEFEAT"]; 
    }
  }
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


let rock = new Rock();
let paper = new Paper();
let scissors = new Scissors();
let choice = [rock, paper, scissors]


const weapons = document.querySelectorAll(".weapon");
const container = document.querySelector("#container");
weapons.forEach(weapon => weapon.addEventListener("click", playGame));

weapons.forEach(weapon => weapon.addEventListener("transitionend", removeSelection));




//returns object weapon----
function computerPlay() 
{
  return choice[getRandomInteger(0, 3)];
}

function humanPlay(humanChoice) 
{
  //let humanChoice = prompt("Your turn:", "Rock, Paper, Scissors").toUpperCase();
  let found = choice.find(x => x.name == humanChoice);
  return found;
}
//-------------------------

function playRound(humanChoice, computerChoice) 
{
  return humanChoice.checkOutcome(computerChoice);
}

//callback on click
function playGame(e)
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

  displayResults(roundOutcome);
}

function displayResults(outcome)
{
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

//extra func
function getRandomInteger(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function removeSelection(e)
{
  if(e.propertyName !== "transform")
  return;
  this.classList.remove("using");
}





