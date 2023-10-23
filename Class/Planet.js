class Planet {
  constructor(coor) {
    this.node = document.createElement("div");
    // this.node.src = "./resources/img/planetaHielo1.jpg";
    this.node.classList.add("PlanetImg");
    gameBoxNode.append(this.node);

    this.numFabricas = 2;
    this.planetSize = 50 * this.numFabricas;
    this.w = this.planetSize; //weight
    this.h = this.planetSize; //heigth
    this.x = coor[0]; // posicion eje x (desde la derecha)
    this.y = coor[1]; // posicion eje y (desde la arriba)

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.addEventListener("click", this.planetFocus);
  }

  planetFocus = () => {
    // game1.loopMoverNave(this)
    game1.planetFocused = this







    // console.log("planeta fijado", this.x, this.y);
    // // game1.decirHola()
    // // decirHola()
    // game1.gameShipLaunch(this)
    // game1.ship1.moverNave(game1.BluePlanet.node)
  };

  devolverNode = () => {
    return this.node;
  };

  //funciones:

  // fabricarEjercito
  //cargarEjercito
  //defenderPlaneta
}
