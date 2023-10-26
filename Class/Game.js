class Game {
  constructor() {
    // Propiedades del juego (cosas)
    this.gameIsPaused = false
    this.randomNumber = Math.floor(Math.random() * 4);
    this.SlowTheGame = 2;
    this.timer = 0;
    this.isGameOn = true;
    this.planetArray = [
      new Planet([110, 350], 1),
      new Planet([110, 450], 1),
      new Planet([1600, 100], 1),
      new Planet([1600, 525], 1),
      new Planet([10, 5], 2),
      new Planet([1100, 725], 5),
      new Planet([1200, 350], 2),
      new Planet([1100, 550], 2),
      new Planet([900, 400], 2),
      new Planet([700, 55], 3),
      new Planet([1400, 200], 3),
      new Planet([700, 800], 3),
      new Planet([400, 350], 3),
    ];
    this.planetFocused = this.planetArray[1];
    this.planetFrom;

    this.enemy = new EnemyShip();
    this.ship1 = new Ship();
  }

  // Métodos (acciones)

  gameOver = () => {
    this.isGameOn = false;
    gameBoxNode.style.display = "none";
    gameOverSectionNode.style.display = "flex";
    this.ship1.node.remove();
    this.enemy.node.remove();
    this.planetArray.forEach((eachPlanet) => {eachPlanet.node.remove()})
    soundOff();
  };
  youWin = () => {
    this.isGameOn = false;
    gameBoxNode.style.display = "none";
    gameOverSectionNode.style.display = "flex";
    this.ship1.node.remove();
    this.enemy.node.remove();
    this.planetArray.forEach((eachPlanet) => {eachPlanet.node.remove()})
    soundOff();


  } 
  checkIfGameOver = () => {
    let playerPlanets = 0;
    let enemyPlanets = 0;
    this.planetArray.forEach ((each) => {
      if (each.owner === "player"){
        playerPlanets++;
      }else if (each.owner === "enemy"){
        enemyPlanets++;
      }

    })
    console.log(playerPlanets , enemyPlanets);
    if (playerPlanets === 0 &&  this.ship1.tropas === 0){
      this.gameOver();
    }else if (enemyPlanets <= 1 && playerPlanets > this.planetArray.length -2){
      this.youWin();
    }


  }

  decirHola = () => {
    console.log("hola en Game");
  };
  gameShipLaunch = (planeta) => {
    // console.log("gameShipLaunch");
    this.ship1.moverNave(this.planet2);
  };

  loopMoverNave = (planeta) => {
    this.ship1.target = this.planetFocused; 
    this.ship1.moverNave(planeta);
  };

  renderAll = () => {
    this.enemy.actualizarTextoInterno();
    this.ship1.actualizarTextoInterno();
    this.planetArray.forEach((elm) => {
      elm.actualizarTextoInterno();
    });
  };

  fabricarEjercitosPlanetas = () => {
    this.planetArray.forEach((elm) => {
      elm.fabricarEjercito();
    });
  };
  checkCongratulations = () => {};
  // checkGameOver = () => {
  //   let gameOver = false;
  //   this.planetArray.forEach((eachPlanet) => {
  //     if (eachPlanet.owner === "enemy") {
  //       gameOver = true;
  //     } else {
  //       gameOver = false;
  //     }
  //   });
  //   if (gameOver === true) {
  //     this.gameOver();
  //   }
  // };
  

  // GAME LOOP --------------------**************************--------------------------
  gameLoop = () => {
    this.timer++;

    

    // info de la nave:
    if (!this.ship1.acoplado) {
      this.ship1.setTargetDistance(this.planetFocused);
    }
    // this.timer++;
    //mover la nave
    if (this.planetFocused !== this.planetFrom) {
      this.planetFrom = this.ship1.moverNave(this.planetFocused);
    }
    // this.checkGameOver();
    this.checkIfGameOver();

    // IA
    // this.enemy.setTargetDistance();

    // ejercito
    this.renderAll();
    this.fabricarEjercitosPlanetas();
    this.ship1.atacarPlaneta(this.planetFocused);
    // this.enemy.atacarPlaneta(this.planetFocused)
    // this.enemy.decirHola2();
    this.enemy.enemyAutomaticMovement();
console.log("bucle")
    // motor del bucle
    if (this.isGameOn && !this.gameIsPaused) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

// ADDEVENTLISTENERs ------------------------*************************-----------------------------
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    game1.gameOver();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    console.log(Espacio);
  }
});
