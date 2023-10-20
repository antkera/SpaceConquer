class Planet {
  constructor(coor) {
    this.node = document.createElement("img");
    this.node.src = "./resources/img/planetaHielo1.jpg";
    this.node.classList.add("PlanetImg")
    gameBoxNode.append(this.node);

    this.numFabricas = 2
    this.planetSize = 50 * this.numFabricas;
    this.w = this.planetSize; //weight
    this.h = this.planetSize; //heigth
    this.x = coor[0]; // posicion eje x (desde la derecha)
    this.y = coor[1]; // posicion eje y (desde la arriba)

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}%`;
    this.node.style.top = `${this.y}%`;
    
  }

  decirHola = () => {
    console.log("hola");
  };

  devolverNode = () => {
    return this.node
  }


    //funciones:

    // fabricarEjercito
    //cargarEjercito
    //defenderPlaneta
















}
