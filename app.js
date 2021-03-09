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
   
    //tie
    if(this.name == otherWeapon.name)
    {
      console.log(this.name + " hugs " + otherWeapon.name);
      console.log("Tie");
      return;
    }
    
    //victory
    if(this.beats == otherWeapon.name)
    {
      console.log(this.name + " beats " + otherWeapon.name);
      console.log("Victory");
    }
    //defeat
    else
    {
      console.log(this.name + " dies to " + otherWeapon.name);
      console.log("Defeat");
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
weapons.forEach(weapon => weapon.addEventListener("click", animateWeapon));

weapons.forEach(weapon => weapon.addEventListener("transitionend", removeSelection));


function removeSelection(e)
{
  if(e.propertyName !== "transform")
  return;
  this.classList.remove("using");
}

function computerPlay() 
{
  return choice[getRandomInteger(0, 3)];
}

function humanPlay() 
{
  //let humanChoice = "ROCK";
  let humanChoice = prompt("Your turn:", "Rock, Paper, Scissors").toUpperCase();

  let found = choice.find(x => x.name == humanChoice);
  return found;
}

function playRound(humanChoice, computerChoice) 
{
  console.log("human " + humanChoice.name);
  console.log("cpu " + computerChoice.name);
  humanChoice.checkOutcome(computerChoice);
}

//extra func
function getRandomInteger(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function animateWeapon(e)
{
  let targetName = e.target.name;
  let specWeapon = Array.from(weapons);
  specWeapon = specWeapon.find(weapon => weapon.name == targetName);
  specWeapon.classList.add("using");
  displayResults();
}

function displayResults()
{
  let res = document.createElement("div");
  res.textContent = "Hello";
  res.classList.add("result");
  container.appendChild(res);

}
//computerPlay();
//humanPlay();
//playRound(humanPlay(), computerPlay());
//console.log(computerPlay());


