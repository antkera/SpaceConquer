class Game {
  constructor() {
    // Propiedades del juego (cosas)
    this.timer = 0;
    this.isGameOn = true;
    this.planetArray = [
      new Planet([5, 5]),
      new Planet([55, 350]),
      new Planet([350, 55]),
      new Planet([900, 55]),
      new Planet([700, 200]),
      new Planet([500, 350])
    ]
    // this.bluePlanet = new Planet([5, 5]);
    // this.planet2 = new Planet([55, 350]);
    // this.planet3 = new Planet([350, 55]);
    // this.planet4 = new Planet([900, 55]);
    // this.planet5 = new Planet([700, 200]);
    // this.planet6 = new Planet([500, 350]);
    this.planetFocused = this.planetArray[0];
    this.planetFrom = this.planetArray[0];

    this.ship1 = new Ship();
    // this.enemy = new EnemyShip();

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
    this.ship1.moverNave(planeta);
  };

  renderAll = () => {
    this.ship1.actualizarTextoInterno();
    this.planetArray.forEach( (elm) => {elm.actualizarTextoInterno()})
  };

  fabricarEjercitosPlanetas = () => {
    this.planetArray.forEach((elm) => {elm.fabricarEjercito()})
    
  };

  // GAME LOOP --------------------**************************--------------------------
  gameLoop = () => {
    // this.timer++;
    //mover la nave
    if (this.planetFocused !== this.planetFrom) {
      this.planetFrom = this.ship1.moverNave(this.planetFocused);
    }
    
    // IA
    // this.enemy.setTargetDistance();


    // ejercito
    this.renderAll();
    this.fabricarEjercitosPlanetas();
    this.ship1.atacarPlaneta(this.planetFocused)

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
