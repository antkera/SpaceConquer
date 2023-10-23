class EnemyShip extends Ship {
  constructor() {
    super();
    this.node.classList.remove("ShipImgPlayer");
    this.node.classList.add("enemyShip"); //crear en CSS
    this.x = 1200;
    this.y = 100;
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.shipSpeed = 1;
    this.owner = "enemy";

    // IA

    this.target = "" // empezamos por planeta natal enemigo

    // this.targetScore =
    this.targetDistance = 0;
  }

  setTargetDistance = (target) => {
    let distance = 0;
    if (target.x > this.x) {
      distance += target.x - this.x;
    }
    if (target.x < this.x) {
      distance += this.x - target.x;
    }
    if (target.y > this.y) {
      distance += target.y - this.y;
    }
    if (target.y < this.y) {
      distance += this.y - target.y;
    }

    return distance;
  };

  findNearSuitablePlanet = (planetArr) => {
    let planet = "";
    let distance = 1000000;
    planetArr.forEach((eachPlanet) => {
      if (
        this.setTargetDistance(eachPlanet) < distance &&
        eachPlanet.tropas < this.tropas &&
        eachPlanet !== this.target &&
        eachPlanet.owner !== "enemy"
      ) {
        distance = this.setTargetDistance(eachPlanet);
        planet = eachPlanet;
      }
    });
    return planet;
  };

  setTarget = () => {
    if (this.acoplado) {
      this.target = this.findNearSuitablePlanet(game1.planetArr);
      this.targetDistance = this.setTargetDistance(this.target);
      return this.target;
    }
    
  }


  enemyAutomaticMovement = () => {
    return this.moverNave(this.setTarget)

  }
  // let randomNumber = Math.floor(Math.random() * game1.planetArray.length);
  // let target = game1.planetArray[randomNumber];
  // console.log(`the target is ${game1.planetArray[randomNumber].tropas}`);

  //     activarIA = () => {
  //         if (this.acoplado){

  //         }
  //     }
}
