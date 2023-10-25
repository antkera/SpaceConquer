class EnemyShip extends Ship {
  constructor() {
    super();
    this.node.classList.remove("ShipImgPlayer");
    this.node.classList.add("enemyShip"); //crear en CSS
    this.x = 1600;
    this.y = 200;

    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.shipSpeed = 1;
    this.owner = "enemy";
    this.ownColorRGB = "255, 0, 0"


    // IA

    this.target; // empezamos por planeta natal enemigo

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
    // let randomNumber = Math.floor(Math.random()*20)/100;
    // console.log(randomNumber);
    let planet;
    let distance = this.alcanceMaximo;
    planetArr.forEach((eachPlanet) => {
      if (
        this.setTargetDistance(eachPlanet) < distance &&
        eachPlanet.tropas < this.tropas * 0.7 /*(1+randomNumber)*/ &&
        eachPlanet.tropas > 0 &&
        eachPlanet.owner !== "enemy"
      ) {
        distance = this.setTargetDistance(eachPlanet);
        planet = eachPlanet;
      }
      // else if (){planet = game1.planetArray[6]}
    });
    if (!planet) {
      return this.findNearSuitablePlanetToReload(planetArr);
    }

    // console.log(planet)
    return planet;
  };

  findNearSuitablePlanetToReload = (planetArr) => {
    let planet;
    let tropas = 0;
    planetArr.forEach((eachPlanet) => {
      if (
        eachPlanet.tropas > tropas &&
        // eachPlanet.tropas > this.tropas &&
        eachPlanet.tropas > 0 &&
        eachPlanet.owner === "enemy"
      ) {
        tropas = eachPlanet.tropas;
        planet = eachPlanet;
      }
    });

    if (!planet) {
      return planetArr[2];
    }

    // console.log(planet)
    return planet;
  };

  setTarget = () => {
    if (!this.isAttacking && !this.isReloading) {
      this.target = this.findNearSuitablePlanet(game1.planetArray);
      this.targetDistance = this.setTargetDistance(this.target);
      console.log("seting Target");
      return this.target;
    }
  };

  enemyAutomaticMovement = () => {
    this.moverNave(this.setTarget());
    // console.log(this);
    this.atacarPlaneta(this.target);
  };
  // let randomNumber = Math.floor(Math.random() * game1.planetArray.length);
  // let target = game1.planetArray[randomNumber];
  // console.log(`the target is ${game1.planetArray[randomNumber].tropas}`);

  //     activarIA = () => {
  //         if (this.acoplado){

  //         }
  //     }
}
