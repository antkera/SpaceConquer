class Game {
  constructor() {
    // Propiedades del juego (cosas)
    this.timer = 0;
    this.isGameOn = true;
    this.planetArray = [
      new Planet([5, 5], 2),
      new Planet([55, 350], 1),
      new Planet([350, 55], 3),
      new Planet([900, 55], 2),
      new Planet([700, 200], 3),
      new Planet([500, 350], 2),
      new Planet([1200, 100], 1)
    ]
    this.planetFocused = this.planetArray[0];
    this.planetFrom = this.planetArray[0];

    this.enemy = new EnemyShip();
    this.ship1 = new Ship();

  }

  // Métodos (acciones)

  gameOver = () => {
    this.isGameOn = false;
    gameBoxNode.style.display = "none";
    homePageNode.style.display = "flex";
  };

  decirHola = () => {
    console.log("hola en Game");
  };
  gameShipLaunch = (planeta) => {
    // console.log("gameShipLaunch");
    this.ship1.moverNave(this.planet2);
  };

  loopMoverNave = (planeta) => {
    this.ship1.target = this.planetFocused
    this.ship1.moverNave(planeta);
  };

  renderAll = () => {
    this.enemy.actualizarTextoInterno();
    this.ship1.actualizarTextoInterno();
    this.planetArray.forEach( (elm) => {elm.actualizarTextoInterno()})
  };

  fabricarEjercitosPlanetas = () => {
    this.planetArray.forEach((elm) => {elm.fabricarEjercito()})
    
  };
  checkCongratulations = () => {

  }
  checkGameOver = () => {
    let gameOver = false
    this.planetArray.forEach((eachPlanet) => {
      if (eachPlanet.owner === "enemy"){
        gameOver = true
      }else{gameOver = false}
    })
    if (gameOver === true){
      this.gameOver();
    }
  }

  // GAME LOOP --------------------**************************--------------------------
  gameLoop = () => {
    // info de la nave:
    if (!this.ship1.acoplado){console.log(this.ship1.setTargetDistance(this.planetFocused));}
    // this.timer++;
    //mover la nave
    if (this.planetFocused !== this.planetFrom) {
      this.planetFrom = this.ship1.moverNave(this.planetFocused);
    }
    // this.checkGameOver();
    
    // IA
    // this.enemy.setTargetDistance();




    // ejercito
    this.renderAll();
    this.fabricarEjercitosPlanetas();
    this.ship1.atacarPlaneta(this.planetFocused)
    // this.enemy.atacarPlaneta(this.planetFocused)
    // this.enemy.decirHola2();
    this.enemy.enemyAutomaticMovement();


    // motor del bucle
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

// ADDEVENTLISTENERs ------------------------*************************-----------------------------
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    this.gameOver();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    console.log(Espacio);
  }
});
