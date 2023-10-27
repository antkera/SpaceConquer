class Game {
  constructor() {
    // Propiedades del juego
    
    this.gameIsPaused = false;
    this.randomNumber = Math.floor(Math.random() * 4);
    this.isGameOn = true;
    this.planetArray = [
      new Planet([110, 350], 1),
      new Planet([110, 450], 1),
      new EnemyPlanet([1600, 100], 1),
      new Planet([1600, 525], 1),
      new Planet([1235, 100], 1),
      new Planet([1000, 129], 4),
      new Planet([235, 600], 1),
      new Planet([500, 864], 3),
      new Planet([650, 500], 3),
      new Planet([10, 5], 2),
      new Planet([1100, 725], 6),
      new Planet([1200, 350], 2),
      new Planet([1100, 550], 2),
      new Planet([900, 400], 2),
      new Planet([700, 55], 3),
      new Planet([1400, 200], 3),
      new Planet([850, 750], 1),
      new Planet([400, 350], 3),
    ];
    this.planetFocused = this.planetArray[1];
    this.planetFrom;
    this.enemy = new EnemyShip();
    this.ship1 = new Ship();
  }

  // Métodos 

  gameOver = () => {
    looseAudioNode.currentTime = 0;
    looseAudioNode.play();
    this.isGameOn = false;
    gameBoxNode.style.display = "none";
    gameOverSectionNode.style.display = "flex";
    this.ship1.node.remove();
    this.enemy.node.remove();
    this.planetArray.forEach((eachPlanet) => {
      eachPlanet.node.remove();
    });
    soundOff();
    youWinYouLooseNode.innerText = "GAME OVER";
    youWinYouLooseNode.style.color = "rgb(241, 0, 0)";
    youWinYouLooseNode.style.backgroundColor = "rgba(74, 13, 8, 0.254)";
    retryButtonNode.innerText = "Retry";
  };

  youWin = () => {
    winAudioNode.currentTime = 0;
    winAudioNode.play();
    this.isGameOn = false;
    gameBoxNode.style.display = "none";
    gameOverSectionNode.style.display = "flex";
    this.ship1.node.remove();
    this.enemy.node.remove();
    this.planetArray.forEach((eachPlanet) => {
      eachPlanet.node.remove();
    });
    soundOff();
    retryButtonNode.innerText = "Play again";
    youWinYouLooseNode.innerHTML = "YOU WIN !!!";
    youWinYouLooseNode.style.color = "rgb(15, 15, 255)";
    youWinYouLooseNode.style.backgroundColor = "rgba(15, 15, 255, 0.100)";
  };

  checkIfGameOver = () => {
    let playerPlanets = 0;
    let enemyPlanets = 0;
    this.planetArray.forEach((each) => {
      if (each.owner === "player") {
        playerPlanets++;
      } else if (each.owner === "enemy") {
        enemyPlanets++;
      }
    });
    if (playerPlanets === 0 && this.ship1.tropas === 0) {
      this.gameOver();
    } else if (
      enemyPlanets <= 1 &&
      playerPlanets > this.planetArray.length - 2
    ) {
      this.youWin();
    }
  };

  gameShipLaunch = (planeta) => {
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


  // GAME LOOP -------------*********************************------------//
  gameLoop = () => {                                                    //
    // info de la nave:                                                //
    if (!this.ship1.acoplado) {                                       //
      this.ship1.setTargetDistance(this.planetFocused);              //
    }                                                               //
    //mover la nave                                                //
    if (this.planetFocused !== this.planetFrom) {                 //
      this.planetFrom = this.ship1.moverNave(this.planetFocused);//
    }                                                           //
    // check                                                   //
    this.checkIfGameOver();                                   //
                                                             //
    // ejercito                                             //
    this.renderAll();                                      //
    this.fabricarEjercitosPlanetas();                     //
    this.ship1.atacarPlaneta(this.planetFocused);        //
                                                        //
    // IA                                              //
    this.enemy.enemyAutomaticMovement();              //
                                                     //
    // motor del bucle                              //
    if (this.isGameOn && !this.gameIsPaused) {     //
      requestAnimationFrame(this.gameLoop);       //
    }                                            //
  };                                            //
}//---------------***************--------------//

// ADDEVENTLISTENERs ------------------------*************************-----------------------------
document.addEventListener("keydown", (event) => {
  if (event.code === "KeyP") {
    game1.gameOver();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.code === "KeyO") {
    game1.youWin();
  }
});
