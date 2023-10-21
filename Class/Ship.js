class Ship {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./resources/img/ShipImg.jpg";
    this.node.classList.add("ShipImg");
    gameBoxNode.append(this.node);

    this.w = 80; //weight
    this.h = 20; //heigth
    this.x = 5; // posicion eje x (desde la derecha)
    this.y = 5; // posicion eje y (desde la arriba)
    this.acoplado = true;
    this.tropas = 10;
    this.shipSpeed = 1;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}%`;
    this.node.style.top = `${this.y}%`;
  }

  //funciones:

  moverNave = (planetaFocused) => {
    console.log(this);
    console.log(planetaFocused);

    if (this.x === planetaFocused.x && this.y === planetaFocused.y) {
      console.log("atracado");
      return planetaFocused;
    } else {
      console.log("nave en camino");
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
    }
  };

  //rellenarBarracas
  //desembarcarEnPlaneta
  //retirada
}
