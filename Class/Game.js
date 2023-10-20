class Game {
  constructor() {
    
    // Propiedades del juego (cosas)
    this.isGameOn = true;
    const planet1 = new Planet([5, 5]);
    const planet2 = new Planet([55, 35]);
    const planet3 = new Planet([35, 55]);
    this.timer = 0;
    const ship1 = new Ship();
  }

  // Métodos (acciones)


  gameOver = () => {
    this.isGameOn = false;
    gameBoxNode.style.display = "none"
    homePageNode.style.display = "flex"
    
  };



      
      
  gameLoop = () => {
    
    this.timer++;
console.log(this.timer);
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
