class Game {
  constructor() {
    // Propiedades del juego (cosas)
    this.timer = 0;
    this.isGameOn = true;
    this.bluePlanet = new Planet([5, 5]);
    this.planet2 = new Planet([55, 350]);
    this.planet3 = new Planet([350, 55]);
    this.planet3 = new Planet([900, 55]);
    this.planet3 = new Planet([700, 200]);
    this.planet3 = new Planet([500, 350]);
    this.planetFocused = this.bluePlanet
    this.planetFrom = this. bluePlanet

    
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
    console.log("gameShipLaunch")
    this.ship1.moverNave(this.planet2)
    
    
  }


  loopMoverNave = (planeta) => {
    this.ship1.moverNave(planeta)
  }

  gameLoop = () => {
    this.timer++;
    //mover la nave
    if(this.planetFocused !== this.planetFrom){
       this.planetFrom = this.ship1.moverNave(this.planetFocused)
    } 




    // console.log(this.timer);
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    this.gameOver();
  }
});
