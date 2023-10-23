class Ship {
  constructor() {
    this.node = document.createElement("div");
    // this.node.src = "./resources/img/ShipImg.jpg";
    this.node.classList.add("ShipImgPlayer");
    gameBoxNode.append(this.node);
    
    this.owner = "player"
    this.acoplado = true;
    this.tropas = 1000;
    this.shipSpeed = 1;
    this.textoInterno = `${this.tropas}`;

    this.w = 80; //weight
    this.h = 20; //heigth
    this.x = 5; // posicion eje x (desde la derecha)
    this.y = 5; // posicion eje y (desde la arriba)

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}%`;
    this.node.style.top = `${this.y}%`;
  }

  //funciones:

  moverNave = (planetaFocused) => {
    // console.log(this);
    // console.log(planetaFocused);

    if (this.x === planetaFocused.x && this.y === planetaFocused.y) {
      this.acoplado = true;
      console.log(`acoplado = ${this.acoplado}`);

      //meter aquí funcion desembarcar ejercitos.
      return planetaFocused;
    } else {
      // console.log("nave en camino");
      this.acoplado = false;
      if (planetaFocused.x > this.x) {
        this.x += this.shipSpeed;
      }
      if (planetaFocused.x < this.x) {
        this.x -= this.shipSpeed;
      }
      if (planetaFocused.y > this.y) {
        this.y += this.shipSpeed;
      }
      if (planetaFocused.y < this.y) {
        this.y -= this.shipSpeed;
      }
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
      console.log(`acoplado = ${this.acoplado}`);


    }
  };

  actualizarTextoInterno = () => {
    this.node.innerText = this.tropas;
  };

  atacarPlaneta = (planetFocused) => {
    if(planetFocused.owner !== this.owner &&
    this.acoplado){
      if(planetFocused.tropas > 0 &&
        this.tropas > 0){
          planetFocused.tropas--;
          this.tropas--;
          console.log("atacando");
      }
      if(planetFocused.tropas <= 0 &&
        this.tropas > 0){
          planetFocused.owner = this.owner
        }
    } 
    if(planetFocused.owner === this.owner &&
      this.acoplado &&
      planetFocused.tropas > 0){
        planetFocused.tropas--
        this.tropas++
        
      }
  }

  //rellenarBarracas
  //desembarcarEnPlaneta
  //retirada
}
