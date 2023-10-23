class Ship {
  constructor() {
    this.node = document.createElement("div");
    // this.node.src = "./resources/img/ShipImg.jpg";
    this.node.classList.add("ShipImgPlayer");
    gameBoxNode.append(this.node);

    this.owner = "player";
    this.acoplado = true;
    this.tropas = 1000;
    this.shipSpeed = 1;
    this.textoInterno = `${this.tropas}`;
    // this.target = game1.planetArray[0];

    this.w = 80; //weight
    this.h = 20; //heigth
    this.x = 5; // posicion eje x (desde la derecha)
    this.y = 5; // posicion eje y (desde la arriba)

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }

  //funciones:

  setTargetDistance = (target) => {
    let distance = 0;
    if (target.x > this.x) {
      distance += target.x - this.x;
    }
    if (target.x < this.x) {
      distance += this.x - target.x;
    }
    if (target.y > this.y) {
      distance += target.y - this.y;
    }
    if (target.y < this.y) {
      distance += this.y - target.y;
    }
    return distance
  };

  moverNave = (target) => {
    // console.log(this);
    // console.log(planetaFocused);

    if (this.x === target.x && this.y === target.y) {
      this.acoplado = true;
      // console.log(`acoplado = ${this.acoplado}`);

      //meter aquí funcion desembarcar ejercitos.
      return target;
    } else {
      // console.log("nave en camino");
      this.acoplado = false;
      if (target.x > this.x) {
        this.x += this.shipSpeed;
      }
      if (target.x < this.x) {
        this.x -= this.shipSpeed;
      }
      if (target.y > this.y) {
        this.y += this.shipSpeed;
      }
      if (target.y < this.y) {
        this.y -= this.shipSpeed;
      }
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
      // console.log(`acoplado = ${this.acoplado}`);
    }
  };

  actualizarTextoInterno = () => {
    this.node.innerText = this.tropas;
  };

  atacarPlaneta = (target) => {
    if (target.owner !== this.owner && this.acoplado) {
      if (target.tropas > 0 && this.tropas > 0) {
        target.tropas--;
        this.tropas--;
        // console.log("atacando");
      }
      if (target.tropas <= 0 && this.tropas > 0) {
        target.owner = this.owner;
      }
    }
    if (
      target.owner === this.owner &&
      this.acoplado &&
      target.tropas > 0
    ) {
      target.tropas--;
      this.tropas++;
    }
  };

  //rellenarBarracas
  //desembarcarEnPlaneta
  //retirada
}
