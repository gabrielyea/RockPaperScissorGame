class Weapon{
  name;
  beats;
  dies;
  constructor(name, beats, dies)
  {
    this.name = name;
    this.beats = beats;
    this.dies = dies;
  }

  //methods
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
    if(this.beats == otherWeapon.dies)
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

let rock = new Rock();
let paper = new Paper();
let scissors = new Scissors();

function computerPlay() 
{
  let choice = [rock, paper, scissors]
  console.log(choice[getRandomInt(0,3)]);
  return choice[getRandomInt(0, 3)];
}

function getRandomInt(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function playRound(computerPlay, humanPlay) 
{

}

function humanPlay() 
{
  let choice = prompt("Your turn:", "Rock, Paper, Scissors");
  return choice.toUpperCase();
}
computerPlay();
humanPlay();
//console.log(computerPlay());


