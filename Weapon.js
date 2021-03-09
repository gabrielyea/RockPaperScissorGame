/* eslint-disable no-unused-vars */
//TODO -- learn to import this class as a module?
class Weapon{
    // name;
    // beats;
    // dies;
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
  
  // eslint-disable-next-line no-unused-vars
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